import { DoubleSide, Mesh, MeshBasicMaterial, SphereGeometry } from "three";
import createMaterial from "../material/createMaterial.js";

const noisyGeometryValues = {
  density: 1.21,
  strength: 2,
  frequency: 0,
  amplitude: 0,
  intensity: 1.21,
  period: 10,
};
const noisyTextureValues = {
  stripes: 0,
  cell: 30000,
  chessMin: 0,
  chessMax: 1,
  grainMin: 0,
  grainMax: 0,
  strokeWidth: 0,
  verticalStripes: false,
};

export default function setMetaBg(scene, palette, texture) {
  const geom = new SphereGeometry(500, 500, 500);
  const material = createMaterial({
    geometry: noisyGeometryValues,
    texture: { ...noisyTextureValues, type: texture },
    palette: {
      ...palette,
      col1: palette.bg1,
      col2: palette.bg2,
      col3: palette.bg1,
      col4: palette.bg2,
    },
    isBg: true,
  });
  const sphere = new Mesh(geom, material);
  sphere.name = "background";
  scene.add(sphere);
}
