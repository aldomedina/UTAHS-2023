import { OrbitControls } from "../../libraries/OrbitControls.js";

import handleAnimation from "./handleAnimation.js";
import handleBackground from "./handleBackground.js";
import handleCamera from "./handleCamera.js";
import handleGeometry from "./handleGeometry.js";
import handlePalette from "./handlePalette.js";
import handleTexture from "./handleTexture.js";
import handleTeapotType from "./handleTeapotType.js";
import handleJSON from "./handleJSON.js";

export default function createGUI(
  gui,
  { state, teapot, cam, scene, renderer, pipes, stars }
) {
  // controls
  const controls = new OrbitControls(cam, renderer.domElement);

  // handlers
  handlePalette({ gui, state, scene, teapot });
  handleBackground({ gui, state, scene, pipes, stars, controls, renderer });
  handleGeometry({ gui, state, teapot });
  handleTexture({ gui, state, teapot });
  handleCamera({ gui, state, cam });
  handleAnimation({ gui, state, teapot });
  handleTeapotType({ gui, state, teapot, cam, controls });
  handleJSON({ gui, controls, state, cam, teapot, scene, pipes, stars });
}
