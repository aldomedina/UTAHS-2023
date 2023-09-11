import getGridSvg from "./getGridSvg.js";
import getMoireeSvg from "./getMoireeSvg.js";
import getDiagonalsSvg from "./getDiagonalSvg.js";
import setMetaBg from "./setMetaBg.js";
import createPipes from "./createPipesBg.js";
const grey = "#F2F5F5";

export const linGrad = (bg1, bg2) =>
  `linear-gradient(to top, ${bg1} 0%, ${bg2} 100%)`;

export const setBG = (bc, bi) => {
  const canvas = document.getElementById("uo");
  canvas.style.backgroundSize = "cover";
  canvas.style.backgroundColor = bc;
  canvas.style.backgroundImage = bi;
};

export const svgToCss = (svg) =>
  `url(data:image/svg+xml,${encodeURI(
    `<svg  width="200" height="200" xmlns="http://www.w3.org/2000/svg" >${svg}</svg>`
  ).replace("#", "%23")})`;

export default ({ scene, background, bgState, palette }) => {
  const { type, hasFrame, borderWidth, moireFreq } = background;
  const prev = scene.children.find((el) => el.name === "background");
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
    // 9: () => createPipes({ bgState }),
    // 10: createStars,
  })[type]();
};
