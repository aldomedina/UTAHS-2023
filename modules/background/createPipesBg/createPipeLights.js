import { AmbientLight, DirectionalLight, Group } from "three";

export default function createPipeLights() {
  const ambientLight = new AmbientLight(0x111111);
  ambientLight.intensity = 3;
  const directionalLightL = new DirectionalLight(0xffffff, 0.9);
  directionalLightL.position.set(-1.2, 1.5, 0.5);
  const directionalLightL2 = new DirectionalLight(0xffffff, 0.9);
  directionalLightL2.position.set(5, 1.5, 0.5);

  const ligths = new Group();
  ligths.add(ambientLight, directionalLightL, directionalLightL2);

  return ligths;
}
