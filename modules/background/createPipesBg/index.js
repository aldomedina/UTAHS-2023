import { Group, MeshStandardMaterial, Vector3 } from "three";

import R from "../../utils/R.js";
import addNewNode from "./addNewNode.js";
import createPipe from "./createPipe.js";
import createMaterial from "../../material/createMaterial.js";

export const pipesConfig = {
  pipeRadius: 0.15,
  jointRadius: 0.225, // 0.2 * 1.5
  MAX_NODES: 300,
  geometry: {
    density: 0,
    strength: 0,
    frequency: 0,
    amplitude: 0,
    intensity: 0,
    period: 10,
  },
};

export default function createPipesBg({ palette, texture }) {
  const pipes = new Group();
  pipes.name = "background";
  const nodes = [];
  pipesConfig.palette = {
    ...palette,
    col1: palette.bg1,
    col2: palette.bg2,
    col3: palette.bg1,
    col4: palette.bg2,
  };
  pipesConfig.texture = texture;
  const material = createMaterial({
    texture: pipesConfig.texture,
    geometry: pipesConfig.geometry,
    palette: pipesConfig.palette,
  });

  const firstSize = R.random_int(-9, 9);
  nodes.push({ v: new Vector3(0, 0, 0), d: 0, axis: "x" });
  nodes.push({ v: new Vector3(firstSize, 0, 0), d: firstSize, axis: "x" });

  for (let i = 0; i < pipesConfig.MAX_NODES; i++) addNewNode(nodes);
  for (let i = 0; i < nodes.length - 1; i++)
    pipes.add(
      createPipe(
        nodes[i].v,
        nodes[i + 1].v,
        material,
        pipesConfig.pipeRadius,
        nodes[i + 1]
      )
    );

  return { pipes, nodes };
}
