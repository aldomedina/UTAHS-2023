const getDiagonalsSvg = (col, strokeWidth) =>
  `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><g style="stroke:${col};"><rect width="200" height="200" fill="transparent" fill-opacity="0." stroke-width="${strokeWidth}0" />${new Array(
    20
  )
    .fill("")
    .map(
      (_, i) =>
        `<line x1="-3" y1="${20 * i}" x2="${
          20 * i
        }" y2="-3" stroke-width="7" />`
    )}</g></svg>`;
export default getDiagonalsSvg;
