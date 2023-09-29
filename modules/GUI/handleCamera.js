export default function handleCamera({ gui, state, cam }) {
  const cameraFolder = gui.addFolder("camera");
  cameraFolder.add(state.camera, "fov", 1, 200).onChange((value) => {
    cam.fov = value;
    cam.updateProjectionMatrix();
  });
}
