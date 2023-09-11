const getMoireeSvg = (col, mSc) =>
  `<g style="stroke:${col};" >${new Array(224 / mSc)
    .fill("")
    .map(
      (_, i) =>
        `<line x1="${1 * mSc * i}" y1="0" x2="${
          1 * mSc * i
        }" y2="200" stroke-width="${0.25 * mSc}" /><line x1="${
          1 * mSc * i + 3
        } " y1="0" x2="${1 * mSc * i - 12}" y2="200" stroke-width="${
          0.25 * mSc
        }" /> `
    )}</g>`;

export default getMoireeSvg;
