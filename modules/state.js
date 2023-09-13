import textures from "./data/textures.js";
import backgrounds from "./data/backgrounds.js";

let state = {
  background: {
    type: backgrounds[7].id,
    hasFrame: true,
    borderWidth: 2,
    moireFreq: 4,
    image: "/public/warhol-flowers.webp",
  },

  texture: {
    verticalStripes: false,
    type: textures[5].id,
    strokeWidth: 0.08,
    stripes: 80,
    cell: 18,
    chessMin: 0,
    chessMax: 1,
    grainMin: 0,
    grainMax: 0,
  },
  geometry: {
    density: 0.121,
    strength: 2.744,
    frequency: 0,
    amplitude: 0,
    intensity: 2.5,
    period: 1,
    scaleX: 3.4,
    scaleY: 1.63,
    scaleZ: 3.3,
  },
  palette: {
    col1: "#bbed2b",
    col2: "#ed0363",
    col3: "#d2a1a1",
    col4: "#8ade79",
    bg1: "#f7459e",
    bg2: "#a4a19c",
  },
  camera: {
    fov: 20,
    position: {
      x: 98,
      y: 87,
      z: -50.6,
    },
    target: {
      x: -0.7,
      y: -0.5,
      z: 3,
    },
  },
  animation: {
    stripes: false,
    stripesVel: 0.5,
    geometry: true,
    geometryVel: 0.9,
    rotationX: false,
    rotationVelX: 1,
    rotationY: false,
    rotationVelY: 1,
    rotationZ: false,
    rotationVelZ: 1,
  },
};

export default state;
