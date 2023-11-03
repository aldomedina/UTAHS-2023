export const grey = "#F2F5F5";

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

export const getThirdPoint = (p1, p2, dir = 1) => {
  let cp1 = p1.clone();
  let cp2 = p2.clone();
  const distance = cp1.distanceTo(cp2);
  return cp1
    .sub(cp2)
    .normalize()
    .multiplyScalar(distance * dir);
};
