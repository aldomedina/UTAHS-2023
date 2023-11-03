import createBackground from "../background/createBackground.js";
import { createFrame } from "../background/createFrame.js";

export default function handleBackground({
  gui,
  state,
  scene,
  pipes,
  stars,
  controls,
  renderer,
}) {
  const backgroundFolder = gui.addFolder("background");

  backgroundFolder.add(state.background, "hasFrame").onChange((hasFrame) => {
    const frame = document.getElementById("frame");
    frame && frame.remove();
    if (hasFrame) {
      createFrame(state.palette.bg1);
    }
  });

  const handleBackgroundChange = () => {
    renderer.setClearColor(0xffffff, 0);
    renderer.alpha = true;
    pipes.active = 0;
    state.camera.position = controls.object.position;
    state.camera.target = controls.target;

    const { pipesGroup, pipesNodes, starsGroup, startsTgt } = createBackground({
      background: state.background,
      palette: state.palette,
      scene,
      camera: state.camera,
      texture: state.texture,
      geometry: state.geometry,
    });

    pipes.nodes = pipesNodes;
    pipes.group = pipesGroup;
    stars.stars = starsGroup;
    stars.tgt = startsTgt;
  };

  backgroundFolder
    .add(state.background, "type", {
      Gradient: 1,
      "Color Grid": 2,
      "Monochrome Grid": 3,
      "Moireé Pattern": 4,
      Parallels: 5,
      "Monochrome Parallels": 6,
      "Noisy Chess": 7,
      "Deep Camouflage": 8,
      "Background Image": 9,
      "Deeper Camouflage": 10,
      "3D Pipes": 11,
      Starfield: 12,
    })
    .onChange(handleBackgroundChange);

  backgroundFolder
    .add(state.background, "borderWidth", {
      none: 0.5,
      small: 2,
      medium: 4,
      large: 8,
    })
    .onChange(handleBackgroundChange);

  backgroundFolder
    .add(state.background, "moireFreq", { small: 1.6, medium: 4, large: 8 })
    .onChange(handleBackgroundChange);

  backgroundFolder
    .add(state.background, "image")
    .name("image path")
    .onChange(handleBackgroundChange);

  gui
    .add({ handleBackgroundChange }, "handleBackgroundChange")
    .name("reset background");
}
