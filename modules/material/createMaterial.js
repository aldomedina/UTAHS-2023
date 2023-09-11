import * as THREE from "three";

import vertexShader from "./vertexShader.js";
import fragmentShader from "./fragmentShader.js";
import nc from "../utils/nc.js";

export default function createMaterial({ geometry, texture, palette, isBg }) {
  const { density, strength, frequency, amplitude, intensity, period } =
    geometry;
  const {
    type,
    stripes,
    cell,
    chessMin,
    chessMax,
    grainMin,
    grainMax,
    strokeWidth,
    verticalStripes,
  } = texture;

  const { col1, col2, col3, col4, bg1, bg2 } = palette;

  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      u_time: { value: 0 },
      u_speed: { value: 0.2 },
      u_density: { value: density },
      u_strength: { value: strength },
      u_frequency: { value: frequency },
      u_amplitude: { value: amplitude },
      u_intensity: { value: intensity },
      u_period: { value: period },
      u_bBoxMin: {
        value: isBg ? { x: -500, y: -500, z: -500 } : { x: -9.5, y: -5, z: -6 },
      },
      u_bBoxMax: {
        value: isBg ? { x: 500, y: 500, z: 500 } : { x: 10, y: 5, z: 6 },
      },
      u_textureId: { value: type },
      u_col1: { value: nc(col1) },
      u_col2: { value: nc(col2) },
      u_col3: { value: nc(col3) },
      u_col4: { value: nc(col4) },
      u_bg1: { value: nc(bg1) },
      u_bg2: { value: nc(bg2) },
      u_strokeWidth: { value: strokeWidth },
      u_cellSize: { value: cell },
      u_chessTop: { value: chessMax },
      u_chessBottom: { value: chessMin },
      u_grainTop: { value: grainMax },
      u_grainBottom: { value: grainMin },
      u_stripes: { value: stripes },
      u_vertical: { value: verticalStripes },
      u_time_stripes: { value: 0 },
    },
  });
}
