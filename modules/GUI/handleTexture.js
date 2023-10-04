export default function handleTexture({ gui, state, teapot }) {
  const textureFolder = gui.addFolder("texture");
  textureFolder
    .add(state.texture, "type", {
      "Static stripes": "1",
      "Dynamic stripes": "2",
      Chess: "3",
      "Striped Chess": "4",
      Gradient: "5",
      Drops: "6",
      "BN stripes": "7",
    })
    .onChange(
      (newTextureId) =>
        (teapot.material.uniforms.u_textureId.value = newTextureId)
    );
  textureFolder
    .add(state.texture, "verticalStripes")
    .onChange(
      (vertical) => (teapot.material.uniforms.u_vertical.value = vertical)
    );

  textureFolder
    .add(state.texture, "strokeWidth")
    .max(0.16)
    .min(0.01)
    .onChange(
      (strokeWidth) =>
        (teapot.material.uniforms.u_strokeWidth.value = strokeWidth)
    );
  textureFolder
    .add(state.texture, "stripes")
    .min(0)
    .max(400)
    .step(1)
    .name("stripes*")
    .onChange(
      (stripes) => (teapot.material.uniforms.u_stripes.value = stripes)
    );
  textureFolder
    .add(state.texture, "cell")
    .max(100)
    .min(1)
    .onChange(
      (cellSize) => (teapot.material.uniforms.u_cellSize.value = cellSize)
    );
  textureFolder
    .add(state.texture, "chessMax")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (chessMax) => (teapot.material.uniforms.u_chessTop.value = chessMax)
    )
    .name("textureMax");
  textureFolder
    .add(state.texture, "chessMin")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (chessMin) => (teapot.material.uniforms.u_chessBottom.value = chessMin)
    )
    .name("textureMin");
  textureFolder
    .add(state.texture, "grainMax")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (grainMax) => (teapot.material.uniforms.u_grainTop.value = grainMax)
    );
  textureFolder
    .add(state.texture, "grainMin")
    .max(1)
    .min(0)
    .step(0.01)
    .onChange(
      (grainMin) => (teapot.material.uniforms.u_grainBottom.value = grainMin)
    );
}
