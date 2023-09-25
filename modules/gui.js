import { Object3D, Vector3 } from "three";
import { OrbitControls } from "../libraries/OrbitControls.js";
import * as dat from "dat.gui";

import createMaterial from "./material/createMaterial.js";
import { createFrame } from "./background/createFrame.js";
import createBackground from "./background/createBackground.js";

import nc from "./utils/nc.js";
import numericReplacer from "./utils/numericReplacer.js";
import download from "./utils/download.js";
import handleUploadFile from "./utils/handleUploadFile.js";

export default function createGUI({
  teapot,
  state,
  scene,
  cam,
  renderer,
  bgState,
}) {
  const gui = new dat.GUI();
  let { palette, background, geometry, texture, camera } = state;
  console.log(cam, camera);

  const forceTeapotUpdate = (seed) => {
    const {
      geometry: { scaleX, scaleY, scaleZ },
    } = seed;
    teapot.scale.x = scaleX;
    teapot.scale.y = scaleY;
    teapot.scale.z = scaleZ;
    teapot.material = createMaterial(seed);
  };

  const forceBackgroundUpdate = (seed) => {
    createBackground({
      background: seed.background,
      palette: seed.palette,
      scene,
      bgState,
    });
    // frame
    const frame = document.getElementById("frame");
    frame && frame.remove();
    if (background.hasFrame) createFrame(seed.palette.bg1);
  };

  const controls = new OrbitControls(cam, renderer.domElement);
  /* -------------- PALETTE  -------------- */

  const paletteChg = (key, value) => {
    palette[key] = value;

    // frame
    const frame = document.getElementById("frame");
    frame && frame.remove();
    if (background.hasFrame) createFrame(palette.bg1);

    // bg
    createBackground({
      background,
      palette,
      scene,
      bgState,
    });

    // teapot
    teapot.material.uniforms.u_col1.value = nc(palette.col1);
    teapot.material.uniforms.u_col2.value = nc(palette.col2);
    teapot.material.uniforms.u_col3.value = nc(palette.col3);
    teapot.material.uniforms.u_col4.value = nc(palette.col4);
    teapot.material.uniforms.u_bg1.value = nc(palette.bg1);
    teapot.material.uniforms.u_bg2.value = nc(palette.bg2);
  };
  const paletteFolder = gui.addFolder("palette");
  Object.keys(palette).map((key) =>
    paletteFolder
      .addColor(palette, key)
      .onFinishChange((value) => paletteChg(key, value))
  );

  /* -------------- BACKGROUND  -------------- */

  const backgroundFolder = gui.addFolder("background");
  backgroundFolder
    .add(background, "type", {
      Gradient: 1,
      "Color Grid": 2,
      "Monochrome Grid": 3,
      "Moireé Pattern": 4,
      Parallels: 5,
      "Monochrome Parallels": 6,
      "Noisy Chess": 7,
      "Deep Camouflage": 8,
      "Background Image": 9,
      // "3D Pipes": 9,
      // Starfield: 10,
    })
    .onChange((newType) => {
      background.type = newType;
      createBackground({
        background,
        palette,
        scene,
        bgState,
      });
    });

  backgroundFolder.add(background, "hasFrame").onChange((hasFrame) => {
    const frame = document.getElementById("frame");
    frame && frame.remove();
    if (hasFrame) {
      createFrame(palette.bg1);
    }
  });

  backgroundFolder
    .add(background, "borderWidth", {
      none: 0.5,
      small: 2,
      medium: 4,
      large: 8,
    })
    .onChange((borderWidth) => {
      background.borderWidth = borderWidth;
      createBackground({
        background,
        palette,
        scene,
        bgState,
      });
    });
  backgroundFolder
    .add(background, "moireFreq", { small: 1.6, medium: 4, large: 8 })
    .onChange((moireFreq) => {
      background.moireFreq = moireFreq;
      createBackground({
        background,
        palette,
        scene,
        bgState,
      });
    });

  backgroundFolder
    .add(background, "image")
    .name("image path")
    .onChange((imagePath) => {
      background.image = imagePath;
      createBackground({
        background,
        palette,
        scene,
        bgState,
      });
    });

  /* -------------- GEOMETRY  -------------- */

  const geometryFolder = gui.addFolder("geometry");
  geometryFolder
    .add(geometry, "density")
    .max(100)
    .min(0.01)
    .step(0.01)
    .onChange((value) => (teapot.material.uniforms.u_density.value = value));
  geometryFolder
    .add(geometry, "strength")
    .max(28)
    .min(0.01)
    .onChange((value) => (teapot.material.uniforms.u_strength.value = value));
  geometryFolder
    .add(geometry, "frequency")
    .max(1)
    .min(0.0)
    .step(0.01)
    .onChange((value) => (teapot.material.uniforms.u_frequency.value = value));
  geometryFolder
    .add(geometry, "amplitude")
    .max(15)
    .min(0.0)
    .step(0.1)
    .onChange((value) => (teapot.material.uniforms.u_amplitude.value = value));
  geometryFolder
    .add(geometry, "intensity")
    .max(5)
    .min(0.0)
    .step(0.01)
    .onChange((value) => (teapot.material.uniforms.u_intensity.value = value));
  geometryFolder
    .add(geometry, "scaleX")
    .max(4)
    .min(0.1)
    .step(0.01)
    .onChange((value) => (teapot.scale.x = value));
  geometryFolder
    .add(geometry, "scaleY")
    .max(4)
    .min(0.1)
    .step(0.01)
    .onChange((value) => (teapot.scale.y = value));
  geometryFolder
    .add(geometry, "scaleZ")
    .max(4)
    .min(0.1)
    .step(0.01)
    .onChange((value) => (teapot.scale.z = value));

  /* -------------- TEXTURE  -------------- */

  const textureFolder = gui.addFolder("texture");
  textureFolder
    .add(texture, "type", {
      "Static stripes": "1",
      "Dynamic stripes": "2",
      Chess: "3",
      "Striped Chess": "4",
      Gradient: "5",
      Drops: "6",
    })
    .onChange(
      (newTextureId) =>
        (teapot.material.uniforms.u_textureId.value = newTextureId)
    );
  textureFolder
    .add(texture, "verticalStripes")
    .onChange(
      (vertical) => (teapot.material.uniforms.u_vertical.value = vertical)
    );

  textureFolder
    .add(texture, "strokeWidth")
    .max(0.16)
    .min(0.01)
    .onChange(
      (strokeWidth) =>
        (teapot.material.uniforms.u_strokeWidth.value = strokeWidth)
    );
  textureFolder
    .add(texture, "stripes")
    .min(0)
    .max(400)
    .step(1)
    .name("stripes*")
    .onChange(
      (stripes) => (teapot.material.uniforms.u_stripes.value = stripes)
    );
  textureFolder
    .add(texture, "cell")
    .max(100)
    .min(1)
    .onChange(
      (cellSize) => (teapot.material.uniforms.u_cellSize.value = cellSize)
    );
  textureFolder
    .add(texture, "chessMax")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (chessMax) => (teapot.material.uniforms.u_chessTop.value = chessMax)
    );
  textureFolder
    .add(texture, "chessMin")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (chessMin) => (teapot.material.uniforms.u_chessBottom.value = chessMin)
    );
  textureFolder
    .add(texture, "grainMax")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (grainMax) => (teapot.material.uniforms.u_grainTop.value = grainMax)
    );
  textureFolder
    .add(texture, "grainMin")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (grainMin) => (teapot.material.uniforms.u_grainBottom.value = grainMin)
    );

  /* -------------- CAMERA  -------------- */

  const cameraFolder = gui.addFolder("camera");
  cameraFolder.add(camera, "fov", 1, 200).onChange((value) => {
    cam.fov = value;
    cam.updateProjectionMatrix();
  });

  /* -------------- ANIMATION  -------------- */

  const animationFolder = gui.addFolder("animation");

  animationFolder.add(state.animation, "stripes").onChange((isOn) => {
    if (!isOn) {
      teapot.material.uniforms.u_time_stripes.value = 0;
    }
  });
  animationFolder
    .add(state.animation, "stripesVel")
    .max(10)
    .min(0.01)
    .step(0.01);

  animationFolder.add(state.animation, "geometry").onChange((isOn) => {
    if (!isOn) {
      teapot.material.uniforms.u_time.value = 0;
    }
  });
  animationFolder
    .add(state.animation, "geometryVel")
    .max(3)
    .min(0.01)
    .step(0.01);

  animationFolder.add(state.animation, "rotationX").onChange((isOn) => {
    if (!isOn) {
      teapot.rotation.x = 0;
    }
  });
  animationFolder
    .add(state.animation, "rotationVelX")
    .max(1)
    .min(0.001)
    .step(0.001);

  animationFolder.add(state.animation, "rotationY").onChange((isOn) => {
    if (!isOn) {
      teapot.rotation.y = 0;
    }
  });
  animationFolder
    .add(state.animation, "rotationVelY")
    .max(1)
    .min(0.001)
    .step(0.001);

  animationFolder.add(state.animation, "rotationZ").onChange((isOn) => {
    if (!isOn) {
      teapot.rotation.z = 0;
    }
  });
  animationFolder
    .add(state.animation, "rotationVelZ")
    .max(1)
    .min(0.001)
    .step(0.001);

  animationFolder.open();

  /* -------------- SEED MANAGEMENT  -------------- */

  gui
    .add(
      {
        saveJson: () => {
          const target = { ...new Vector3().copy(controls.target) };
          const position = { ...new Vector3().copy(controls.object.position) };
          const seed = {
            ...state,
            camera: { ...camera, position, target, fov: camera.fov },
          };
          download(
            JSON.stringify(seed, numericReplacer, 2),
            "teapot.json",
            "text/plain"
          );
        },
      },
      "saveJson"
    )
    .name("💾  SAVE JSON");

  gui
    .add(
      {
        uploadJson: () => {
          handleUploadFile((uploadedSeed) => {
            console.log(uploadedSeed);
            state.animation.geometry = uploadedSeed.animation.geometry;
            state.animation.stripes = uploadedSeed.animation.stripes;
            state.animation.geometryVel = uploadedSeed.animation.geometryVel;
            state.animation.stripesVel = uploadedSeed.animation.stripesVel;
            state.animation.rotationX = uploadedSeed.animation.rotationX;
            state.animation.rotationY = uploadedSeed.animation.rotationY;
            state.animation.rotationZ = uploadedSeed.animation.rotationZ;
            state.animation.rotationVelX = uploadedSeed.animation.rotationVelX;
            state.animation.rotationVelY = uploadedSeed.animation.rotationVelY;
            state.animation.rotationVelZ = uploadedSeed.animation.rotationVelZ;

            state.texture = uploadedSeed.texture;
            state.geometry = uploadedSeed.geometry;
            state.background = uploadedSeed.background;
            state.palette = uploadedSeed.palette;
            state.camera = uploadedSeed.camera;
            console.log(state);
            controls.object.position.copy(state.camera.position);
            controls.target.copy(state.camera.target);
            controls.update();

            cam.fov = state.camera.fov;
            cam.updateProjectionMatrix();
            forceTeapotUpdate(state);
            forceBackgroundUpdate(state);
            for (var i in gui.__controllers) {
              gui.__controllers[i].updateDisplay();
            }
          });
        },
      },
      "uploadJson"
    )
    .name("⬆️ UPLOAD JSON");
}
