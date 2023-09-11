const getGridSvg = (col, strokeWidth = 2) =>
  `<g style="stroke:${col};" ><rect width="200" height="200" fill="transparent" fill-opacity="0." stroke-width="${strokeWidth}0" />${new Array(
    20
  )
    .fill("")
    .map(
      (_, i) =>
        `<line x1="0" y1="${10 * i}" x2="200" y2="${
          10 * i
        }" stroke-width=".5" /><line x1="${10 * i}" y1="0" x2="${
          10 * i
        }" y2="200" stroke-width=".5" />`
    )}</g>`;

export default getGridSvg;
