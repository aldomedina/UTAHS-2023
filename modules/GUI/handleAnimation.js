export default function handleAnimation({ gui, state, teapot }) {
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
}
