import { Clock } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createScene, handleResize } from "./modules/scene.js";
import { createFrame } from "./modules/background/createFrame.js";

import createTeapot from "./modules/teapot/createTeapot.js";
import createBackground from "./modules/background/createBackground.js";
import createGUI from "./modules/gui.js";
import {
  initiateCameraControls,
  handleCameraListener,
} from "./modules/utils/handleCameraListener.js";
import state from "./modules/state.js";

const { scene, camera, renderer } = createScene(state.camera);

const frame = state.background.hasFrame && createFrame(state.palette.bg1);
let teapot = createTeapot({
  geometry: state.geometry,
  scene,
  texture: state.texture,
  palette: state.palette,
});

createBackground({
  background: state.background.type,
  palette: state.palette,
  scene,
});

const clock = new Clock();
const render = () => renderer.render(scene, camera);
// TODO: REMOVE CAMERA LISTENER
const controls = new OrbitControls(camera, renderer.domElement);
initiateCameraControls(state.camera);
function animate() {
  render();

  const time = clock.getElapsedTime();
  if (controls) handleCameraListener(controls);
  if (state.animation.geometry)
    teapot.material.uniforms.u_time.value = time * state.animation.geometryVel;
  if (state.animation.stripes)
    teapot.material.uniforms.u_time_stripes.value =
      time * state.animation.stripesVel;
  if (state.animation.rotation)
    teapot.rotation.y += 0.01 * state.animation.rotationVel;
  requestAnimationFrame(animate);
}

animate();

handleResize(camera, renderer, render, frame);

createGUI(teapot, state, scene, camera, renderer, controls);
