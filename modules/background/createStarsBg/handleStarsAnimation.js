import { Box3, Frustum, Matrix4, Vector3 } from "three";
import R from "../../utils/R.js";
import { starsCount } from "./index.js";

const gridBounds = new Box3(
  new Vector3(-9.523809432983398, -5, -6.349206447601318),
  new Vector3(10.901824951171875, 5, 6.349206447601318)
);

export default function handleStarsAnimation({ stars, tgt }, camera) {
  let pos = stars.geometry.getAttribute("position").array;
  const frustum = new Frustum();
  const matrix = new Matrix4().multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(matrix);

  for (let i = 0; i < starsCount; i += 3) {
    const currentPos = new Vector3(pos[i], pos[i + 1], pos[i + 2]);
    if (!frustum.containsPoint(currentPos)) {
      let star = new Vector3(0, 0, 0);
      while (gridBounds.containsPoint(star)) {
        star = new Vector3(
          (R.random_num(0, 1) - 0.5) * 40,
          (R.random_num(0, 1) - 0.5) * 40,
          (R.random_num(0, 1) - 0.5) * 40
        );
      }
      pos[i] = star.x;
      pos[i + 1] = star.y;
      pos[i + 2] = star.z;
    } else {
      const factor = 0.005;
      pos[i] += (tgt.x - pos[i]) * factor;
      pos[i + 1] += (tgt.y - pos[i + 1]) * factor;
      pos[i + 2] += (tgt.z - pos[i + 2]) * factor;
    }
  }
  stars.geometry.getAttribute("position").needsUpdate = true;
}
