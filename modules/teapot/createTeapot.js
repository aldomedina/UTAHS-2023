import * as THREE from "three";

import TeapotGeometry from "./TeapotGeometry.js";
import createMaterial from "../material/createMaterial.js";
export default function createTeapot({ scene, geometry, texture, palette }) {
  const { scaleX, scaleY, scaleZ } = geometry;
  const tGeometry = new TeapotGeometry(5, 105, true, true, true, true);
  const tMaterial = createMaterial({ geometry, texture, palette });
  const teapot = new THREE.Mesh(tGeometry, tMaterial);
  teapot.scale.x = scaleX;
  teapot.scale.y = scaleY;
  teapot.scale.z = scaleZ;
  tGeometry.computeBoundingBox();
  teapot.name = "teapot";
  scene.add(teapot);
  return teapot;
}
