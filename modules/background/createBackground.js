import getGridSvg from "./getGridSvg.js";
import getMoireeSvg from "./getMoireeSvg.js";
import getDiagonalsSvg from "./getDiagonalSvg.js";
import setMetaBg from "./setMetaBg.js";
import createPipesBg from "./createPipesBg/index.js";
import { grey, linGrad, setBG, svgToCss, getThirdPoint } from "./bgUtils.js";
import { Group, Vector3 } from "three";
import createStarsBG from "./createStarsBg/index.js";

export default ({ scene, background, palette, camera, texture, geometry }) => {
  const { type, borderWidth, moireFreq } = background;
  const {
    position: { x: px, y: py, z: pz },
    target: { x: tx, y: ty, z: tz },
  } = camera;
  const prev = scene.children.find((el) => el.name === "background");

  let pipesGroup = false,
    pipesNodes = false,
    starsGroup = false,
    startsTgt = false;

  if (prev) {
    scene.remove(prev);
  }

  ({
    1: () => setBG("", linGrad(palette.bg1, palette.bg2)),
    2: () => setBG(palette.bg1, svgToCss(getGridSvg(palette.bg2, borderWidth))),
    3: () => setBG("black", svgToCss(getGridSvg(grey, borderWidth))),
    4: () => setBG(palette.bg1, svgToCss(getMoireeSvg(palette.bg2, moireFreq))),
    5: () =>
      setBG(palette.bg1, svgToCss(getDiagonalsSvg(palette.bg2, borderWidth))),
    6: () => setBG("#000", svgToCss(getDiagonalsSvg(grey, borderWidth))),
    7: () => setMetaBg(scene, palette, "3"),
    8: () => setMetaBg(scene, palette, "5"),
    9: () => setBG(palette.bg1, `url(${background.image})`),
    10: () => setMetaBg(scene, palette, "5", true),
    11: () => {
      setBG("", linGrad(palette.bg1, palette.bg2));
      const { pipes, nodes } = createPipesBg({ palette, texture });
      pipesGroup = pipes;
      pipesNodes = nodes;
      const pipesPosition = getThirdPoint(
        new Vector3(tx, ty, tz),
        new Vector3(px, py, pz)
      );
      const distance = new Vector3(0, 0, 0).distanceTo(new Vector3(px, py, pz));
      const scalar = distance / 28 + 1;
      pipesGroup.scale.set(scalar, scalar, scalar);
      pipesGroup.position.copy(pipesPosition);
      pipesGroup.lookAt(new Vector3(0, 0, 0));
      scene.add(pipes);
    },
    12: () => {
      setBG("#000", linGrad("#000", "#000"));
      starsGroup = createStarsBG({ geometry, camera });
      startsTgt = getThirdPoint(
        new Vector3(px, py, pz),
        new Vector3(tx, ty, tz),
        2
      );
      scene.add(starsGroup);
    },
  })[type]();

  return { pipesGroup, pipesNodes, starsGroup, startsTgt };
};
