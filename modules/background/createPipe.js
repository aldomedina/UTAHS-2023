import { ArrowHelper, CylinderGeometry, Mesh, Vector3 } from "three";

const createPipe = (toPoint, fromPoint, material, pipeRadius, newNode) => {
  const deltaVector = new Vector3().subVectors(toPoint, fromPoint);
  const arrow = new ArrowHelper(deltaVector.clone().normalize(), fromPoint);
  const geometry = new CylinderGeometry(
    pipeRadius,
    pipeRadius,
    deltaVector.length(),
    10,
    4,
    true
  );
  const mesh = new Mesh(geometry, material);

  mesh.rotation.setFromQuaternion(arrow.quaternion);
  mesh.position.addVectors(fromPoint, deltaVector.multiplyScalar(0.5));
  mesh.updateMatrix();
  mesh.scale.y = 0;
  mesh.position[newNode.axis] -= newNode.d / 2;
  return mesh;
};

export default createPipe;
