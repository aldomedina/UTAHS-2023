import types from "../data/types.js";
import R from "../utils/R.js";

export default function handleTeapotType({
  gui,
  state,
  teapot,
  cam,
  controls,
}) {
  const presets = {};
  types.map((el) => {
    const randomCamSelected = R.random_choice(el.cam);
    const [px, py, pz, tx, ty, tz] = randomCamSelected;
    presets[el.name] = {
      geometry: {
        density: R.random_num(el.ranges[1][0], el.ranges[1][1]),
        strength: R.random_num(el.ranges[2][0], el.ranges[2][1]),
        frequency: R.random_num(el.ranges[3][0], el.ranges[3][1]),
        amplitude: R.random_num(el.ranges[4][0], el.ranges[4][1]),
        intensity: R.random_num(el.ranges[5][0], el.ranges[5][1]),
        period: el.period,
        scaleX: R.random_num(el.ranges[6][0], el.ranges[6][1]),
        scaleY: R.random_num(el.ranges[7][0], el.ranges[7][1]),
        scaleZ: R.random_num(el.ranges[8][0], el.ranges[8][1]),
      },
      camera: {
        fov: R.random_num(el.ranges[0][0], el.ranges[0][1]),
        position: {
          x: px,
          y: py,
          z: pz,
        },
        target: {
          x: tx,
          y: ty,
          z: tz,
        },
      },
    };
  });

  const handlePresetSelection = (value) => {
    const presetSelected = presets[value];
    // update state
    for (let key in presetSelected) {
      for (let subKey in presetSelected[key]) {
        state[key][subKey] = presetSelected[key][subKey];
      }
    }

    // update gui
    for (var i in gui.__folders) {
      for (var j in gui.__folders[i].__controllers) {
        gui.__folders[i].__controllers[j].updateDisplay();
      }
    }
    // update teapot
    teapot.material.uniforms.u_density.value = state.geometry.density;
    teapot.material.uniforms.u_strength.value = state.geometry.strength;
    teapot.material.uniforms.u_frequency.value = state.geometry.frequency;
    teapot.material.uniforms.u_amplitude.value = state.geometry.amplitude;
    teapot.material.uniforms.u_intensity.value = state.geometry.intensity;
    teapot.scale.x = state.geometry.scaleX;
    teapot.scale.y = state.geometry.scaleY;
    teapot.scale.z = state.geometry.scaleZ;

    // update camera
    controls.object.position.copy(state.camera.position);
    controls.target.copy(state.camera.target);
    controls.update();

    cam.fov = state.camera.fov;
    cam.updateProjectionMatrix();
  };

  const dropdownState = { selected: "minus 3" };
  gui
    .add(dropdownState, "selected", Object.keys(presets))
    .name("Presets")
    .onChange(handlePresetSelection);
}
