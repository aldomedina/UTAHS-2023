export default function handleGeometry({ gui, state, teapot }) {
  const geometryFolder = gui.addFolder("geometry");
  geometryFolder
    .add(state.geometry, "density")
    .max(100)
    .min(0.01)
    .step(0.01)
    .onChange((value) => (teapot.material.uniforms.u_density.value = value));
  geometryFolder
    .add(state.geometry, "strength")
    .max(28)
    .min(0.01)
    .onChange((value) => (teapot.material.uniforms.u_strength.value = value));
  geometryFolder
    .add(state.geometry, "frequency")
    .max(1)
    .min(0.0)
    .step(0.01)
    .onChange((value) => (teapot.material.uniforms.u_frequency.value = value));
  geometryFolder
    .add(state.geometry, "amplitude")
    .max(15)
    .min(0.0)
    .step(0.1)
    .onChange((value) => (teapot.material.uniforms.u_amplitude.value = value));
  geometryFolder
    .add(state.geometry, "intensity")
    .max(5)
    .min(0.0)
    .step(0.01)
    .onChange((value) => (teapot.material.uniforms.u_intensity.value = value));
  geometryFolder
    .add(state.geometry, "scaleX")
    .max(4)
    .min(0.1)
    .step(0.01)
    .onChange((value) => (teapot.scale.x = value));
  geometryFolder
    .add(state.geometry, "scaleY")
    .max(4)
    .min(0.1)
    .step(0.01)
    .onChange((value) => (teapot.scale.y = value));
  geometryFolder
    .add(state.geometry, "scaleZ")
    .max(4)
    .min(0.1)
    .step(0.01)
    .onChange((value) => (teapot.scale.z = value));
  geometryFolder
    .add({ tapa: false }, "tapa")
    .onChange((value) => console.log(teapot.geometry));
}
