import { Clock, Vector3 } from "three";
import * as dat from "dat.gui";
import { createScene, handleResize } from "./modules/scene.js";
import { createFrame } from "./modules/background/createFrame.js";

import createTeapot from "./modules/teapot/createTeapot.js";
import createBackground from "./modules/background/createBackground.js";
import createGUI from "./modules/GUI/index.js";
import handlePipesAnimation from "./modules/background/createPipesBg/handlePipesAnimation.js";
import state from "./modules/state.js";
import handleStarsAnimation from "./modules/background/createStarsBg/handleStarsAnimation.js";

const { scene, camera, renderer } = createScene(state.camera);

const frame = state.background.hasFrame && createFrame(state.palette.bg1);
let teapot = createTeapot({
  geometry: state.geometry,
  scene,
  texture: state.texture,
  palette: state.palette,
});

const pipes = {
  group: false,
  nodes: false,
  active: 0,
};

const stars = {
  stars: false,
  tgt: false,
};

const { pipesGroup, pipesNodes, starsGroup, startsTgt } = createBackground({
  background: state.background,
  palette: state.palette,
  scene,
  camera: state.camera,
  texture: state.texture,
  geometry: state.geometry,
});

pipes.group = pipesGroup;
pipes.nodes = pipesNodes;
stars.stars = starsGroup;
stars.tgt = startsTgt;

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
  if (pipes.group) handlePipesAnimation(pipes);
  if (stars.stars) handleStarsAnimation(stars, camera);
  requestAnimationFrame(animate);
}

animate();

handleResize(camera, renderer, render, frame);

const gui = new dat.GUI();

createGUI(gui, { state, teapot, cam: camera, scene, renderer, pipes, stars });
