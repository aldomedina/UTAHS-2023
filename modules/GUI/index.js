import { Vector3 } from "three";
import { OrbitControls } from "../../libraries/OrbitControls.js";

import handleAnimation from "./handleAnimation.js";
import handleBackground from "./handleBackground.js";
import handleCamera from "./handleCamera.js";
import handleGeometry from "./handleGeometry.js";
import handlePalette from "./handlePalette.js";
import handleTexture from "./handleTexture.js";

import download from "../utils/download.js";
import numericReplacer from "../utils/numericReplacer.js";
import handleUploadFile from "../utils/handleUploadFile.js";
import createMaterial from "../material/createMaterial.js";
import createBackground from "../background/createBackground.js";
import { createFrame } from "../background/createFrame.js";
import handleTeapotType from "./handleTeapotType.js";

export default function createGUI(
  gui,
  { state, teapot, cam, scene, renderer }
) {
  // controls
  const controls = new OrbitControls(cam, renderer.domElement);

  // handlers
  handlePalette({ gui, state, scene, teapot });
  handleBackground({ gui, state, scene });
  handleGeometry({ gui, state, teapot });
  handleTexture({ gui, state, teapot });
  handleCamera({ gui, state, cam });
  handleAnimation({ gui, state, teapot });
  handleTeapotType({ gui, state, teapot, cam, controls });

  // seed management
  const saveJson = () => {
    const target = { ...new Vector3().copy(controls.target) };
    const position = { ...new Vector3().copy(controls.object.position) };
    const seed = {
      ...state,
      camera: { position, target, fov: state.camera.fov },
    };
    download(
      JSON.stringify(seed, numericReplacer, 2),
      "teapot.json",
      "text/plain"
    );
  };

  // TODO: arreglar bug -> al cargar json, gui deja de funcionar

  const uploadJson = () =>
    handleUploadFile((seed) => {
      // update state
      for (let key in seed) {
        for (let subKey in seed[key]) {
          state[key][subKey] = seed[key][subKey];
        }
      }

      // update gui
      for (var i in gui.__folders) {
        for (var j in gui.__folders[i].__controllers) {
          gui.__folders[i].__controllers[j].updateDisplay();
        }
      }

      // update camera
      controls.object.position.copy(state.camera.position);
      controls.target.copy(state.camera.target);
      controls.update();

      cam.fov = state.camera.fov;
      cam.updateProjectionMatrix();

      // update teapot
      const {
        geometry: { scaleX, scaleY, scaleZ },
      } = state;
      teapot.scale.x = scaleX;
      teapot.scale.y = scaleY;
      teapot.scale.z = scaleZ;
      teapot.material = createMaterial(state);

      // update background
      createBackground({
        background: state.background,
        palette: state.palette,
        scene,
      });
      // frame
      const frame = document.getElementById("frame");
      frame && frame.remove();
      if (state.background.hasFrame) createFrame(state.palette.bg1);
    });

  gui.add({ saveJson }, "saveJson").name("💾  SAVE JSON");
  gui.add({ uploadJson }, "uploadJson").name("⬆️  UPLOAD JSON");
}
