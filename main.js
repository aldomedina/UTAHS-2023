import { Clock } from "three";
import { createScene, handleResize } from "./modules/scene.js";
import { createFrame } from "./modules/background/createFrame.js";

import createTeapot from "./modules/teapot/createTeapot.js";
import createBackground from "./modules/background/createBackground.js";
import createGUI from "./modules/gui.js";

import state from "./modules/state.js";

const { scene, camera, renderer } = createScene(state.camera);

const frame = state.background.hasFrame && createFrame(state.palette.bg1);
let teapot = createTeapot({
  geometry: state.geometry,
  scene,
  texture: state.texture,
  palette: state.palette,
});
const bgState = {
  pipes: false,
  stars: false,
};
createBackground({
  background: state.background,
  palette: state.palette,
  scene,
  bgState,
});

const clock = new Clock();
const render = () => renderer.render(scene, camera);

function animate() {
  render();

  const time = clock.getElapsedTime();
  if (state.animation.geometry)
    teapot.material.uniforms.u_time.value = time * state.animation.geometryVel;
  if (state.animation.stripes)
    teapot.material.uniforms.u_time_stripes.value =
      time * state.animation.stripesVel;
  if (state.animation.rotationX)
    teapot.rotation.x += 0.01 * state.animation.rotationVelX;
  if (state.animation.rotationY)
    teapot.rotation.y += 0.01 * state.animation.rotationVelY;
  if (state.animation.rotationZ)
    teapot.rotation.z += 0.01 * state.animation.rotationVelZ;
  requestAnimationFrame(animate);
}

animate();

handleResize(camera, renderer, render, frame);

createGUI({ teapot, state, scene, cam: camera, renderer, bgState });
