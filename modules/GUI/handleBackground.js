import createBackground from "../background/createBackground.js";
import { createFrame } from "../background/createFrame.js";

export default function handleBackground({ gui, state, scene }) {
  const backgroundFolder = gui.addFolder("background");

  backgroundFolder.add(state.background, "hasFrame").onChange((hasFrame) => {
    const frame = document.getElementById("frame");
    frame && frame.remove();
    if (hasFrame) {
      createFrame(state.palette.bg1);
    }
  });

  const handleBackgroundChange = () =>
    createBackground({
      background: state.background,
      palette: state.palette,
      scene,
    });

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
      // "3D Pipes": 9,
      // Starfield: 10,
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
}
