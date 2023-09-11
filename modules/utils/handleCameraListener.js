let posX, posY, posZ, targetX, targetY, targetZ;

// STATE
let npx = 0,
  npy = 0,
  npz = 0,
  ntx = 0,
  nty = 0,
  ntz = 0;

export function handleCameraListener(controls) {
  if (controls.object.position.x !== npx) {
    posX.value = controls.object.position.x.toString();
    npx = controls.object.position.x;
  }
  if (controls.object.position.y !== npy) {
    posY.value = controls.object.position.y.toString();
    npy = controls.object.position.y;
  }
  if (controls.object.position.z !== npz) {
    posZ.value = controls.object.position.z.toString();
    npz = controls.object.position.z;
  }
  if (controls.target.x !== ntx) {
    targetX.value = controls.target.x.toString();
    npx = controls.target.x;
  }
  if (controls.target.y !== nty) {
    targetY.value = controls.target.y.toString();
    npy = controls.target.x;
  }
  if (controls.target.z !== ntz) {
    targetZ.value = controls.target.z.toString();
    npz = controls.target.z;
  }
}

export function initiateCameraControls({
  position: { x: px, y: py, z: pz },
  target: { x: tx, y: ty, z: tz },
}) {
  posX = document.getElementById("px");
  posY = document.getElementById("py");
  posZ = document.getElementById("pz");
  targetX = document.getElementById("tx");
  targetY = document.getElementById("ty");
  targetZ = document.getElementById("tz");
  posX.value = px.toString();
  posY.value = py.toString();
  posZ.value = pz.toString();
  targetX.value = tx.toString();
  targetY.value = ty.toString();
  targetZ.value = tz.toString();
}
