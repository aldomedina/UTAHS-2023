import createBackground from "../background/createBackground.js";
import { createFrame } from "../background/createFrame.js";
import palettes from "../data/palettes.js";
import nc from "../utils/nc.js";

export default function handlePalette({ gui, state, scene, teapot }) {
  const paletteFolder = gui.addFolder("palette");

  const handleBG = () => {
    // frame
    const frame = document.getElementById("frame");
    frame && frame.remove();
    if (state.background.hasFrame) createFrame(state.palette.bg1);

    // background
    createBackground({
      scene,
      background: state.background,
      palette: state.palette,
    });
  };

  /* SINGLE COLOR */

  const onColorChange = (key) => {
    handleBG();
    // teapot
    teapot.material.uniforms[`u_${key}`].value = nc(state.palette[key]);
  };

  paletteFolder
    .addColor(state.palette, "col1")
    .onFinishChange((value) => onColorChange("col1"));
  paletteFolder
    .addColor(state.palette, "col2")
    .onFinishChange((value) => onColorChange("col2"));
  paletteFolder
    .addColor(state.palette, "col3")
    .onFinishChange((value) => onColorChange("col3"));
  paletteFolder
    .addColor(state.palette, "col4")
    .onFinishChange((value) => onColorChange("col4"));
  paletteFolder
    .addColor(state.palette, "bg1")
    .onFinishChange((value) => onColorChange("bg1"));
  paletteFolder
    .addColor(state.palette, "bg2")
    .onFinishChange((value) => onColorChange("bg2"));

  /* PALETTE */

  const formattedPalettes = {};
  palettes.map((el) => {
    const [[[bg1, bg2]], [col1, col2, col3, col4]] = el.c;
    formattedPalettes[el.n] = {
      bg1: `#${bg1}`,
      bg2: `#${bg2}`,
      col1: `#${col1}`,
      col2: `#${col2}`,
      col3: `#${col3}`,
      col4: `#${col4}`,
    };
  });

  const dropdownState = { selected: "Superhero" };
  function updateColors(value) {
    const selectedColors = formattedPalettes[value];
    for (let color in selectedColors) {
      state.palette[color] = selectedColors[color];
    }
    // Actualizar la interfaz de dat.GUI
    for (let i in paletteFolder.__controllers) {
      paletteFolder.__controllers[i].updateDisplay();
    }

    handleBG();
    Object.keys(selectedColors).map(
      (key) =>
        (teapot.material.uniforms[`u_${key}`].value = nc(selectedColors[key]))
    );
  }

  paletteFolder
    .add(dropdownState, "selected", Object.keys(formattedPalettes))
    .name("Combinaciones")
    .onChange(updateColors);
}
