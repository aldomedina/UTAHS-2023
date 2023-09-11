import hexToRgb from "../utils/hexToRgb.js";
import newShade from "../utils/newShade.js";

const setFrameStyle = (w, col1, col2) => {
  const div = document.createElement("div");
  div.setAttribute(
    "style",
    `
        height: calc(100% - ${w}px);
        width: calc(100% - ${w}px);
        padding: ${w / 2}px;
        box-shadow:
          inset ${w / 2}px ${w / 2}px 3px 0 ${col1},
          inset 0 0 0 0 ${col2 ?? col1},
          inset 0 0 0 0 ${col1},
          inset -${w / 2}px -${w / 2}px 0 0 ${col2 ?? col1};
      `
  );
  return div;
};

const createFrame = (col1) => {
  const cCol1 = hexToRgb(col1, 0.7);
  const light = newShade(col1, 80);
  const dark1 = newShade(col1, -30);
  const dark2 = newShade(col1, -50);
  const dark3 = newShade(col1, -90);

  const main = document.createElement("div");
  main.id = "frame";
  const D = Math.min(window.innerHeight, window.innerWidth);
  main.setAttribute(
    "style",
    ` box-sizing: border-box;
        position:absolute;
        top: calc(50% - ${D / 2}px);
        left: calc(50% - ${D / 2}px);       
        color: white; 
        height: ${D}px;
        width: ${D}px;
        border: 2px solid ${dark3};
        pointer-events: none;
      `
  );
  const outer = setFrameStyle(4, light, dark1);

  const fat = setFrameStyle(12, cCol1);
  const inner = setFrameStyle(4, dark2, light);
  const innerBlack = setFrameStyle(4, dark3);

  inner.appendChild(innerBlack);
  fat.appendChild(inner);
  outer.appendChild(fat);
  main.appendChild(outer);
  document.body.appendChild(main);
  return main;
};

export { createFrame };
