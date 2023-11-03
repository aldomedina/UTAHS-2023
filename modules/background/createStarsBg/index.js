import {
  Box3,
  BufferAttribute,
  BufferGeometry,
  Points,
  PointsMaterial,
  Vector3,
} from "three";
import { getThirdPoint } from "../bgUtils.js";
import R from "../../utils/R.js";

export const starsCount = 500;

const gridBounds = new Box3(
  new Vector3(-10, -10, -10),
  new Vector3(10, 10, 10)
);

const getRandomParticelPos = (starsCount) => {
  const arr = new Float32Array(starsCount * 3);
  for (let i = 0; i < starsCount; i += 3) {
    let star = new Vector3(0, 0, 0);
    while (gridBounds.containsPoint(star)) {
      star = new Vector3(
        (R.random_num(0, 1) - 0.5) * 40,
        (R.random_num(0, 1) - 0.5) * 40,
        (R.random_num(0, 1) - 0.5) * 40
      );
    }
  }
  return arr;
};

export default function createStarsBG({
  camera: {
    position: { x: px, y: py, z: pz },
    target: { x: tx, y: ty, z: tz },
  },
  geometry: geo,
}) {
  const { scaleX, scaleY, scaleZ } = geo;
  const D = Math.max(scaleX, scaleY, scaleZ);
  const size = D * 0.1;
  const pos = getThirdPoint(new Vector3(tx, ty, tz), new Vector3(px, py, pz));
  const geometry = new BufferGeometry();
  geometry.setAttribute(
    "position",
    new BufferAttribute(getRandomParticelPos(starsCount), 3)
  );
  const pointsMaterial = new PointsMaterial({ size });
  const stars = new Points(geometry, pointsMaterial);
  stars.name = "background";
  return stars;
}
