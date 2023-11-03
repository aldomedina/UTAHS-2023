import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";
import { pipesConfig } from "./index.js";
import createMaterial from "../../material/createMaterial.js";

export default function createJoint(position) {
  const material = createMaterial({
    geometry: pipesConfig.geometry,
    texture: pipesConfig.texture,
    palette: pipesConfig.palette,
  });
  const ball = new Mesh(
    new SphereGeometry(pipesConfig.jointRadius, 8, 8),
    material
  );
  ball.position.copy(position);
  return ball;
}
