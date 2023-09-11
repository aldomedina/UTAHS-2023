const getThirdPoint = (p1, p2, dir = 1) => {
  let cp1 = p1.clone();
  let cp2 = p2.clone();
  const distance = cp1.distanceTo(cp2);
  return cp1
    .sub(cp2)
    .normalize()
    .multiplyScalar(distance * dir);
};

export default getThirdPoint;
