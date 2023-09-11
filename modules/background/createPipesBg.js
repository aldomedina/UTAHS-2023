import { Group, MeshBasicMaterial, Vector3 } from "three";
import getThirdPoint from "../utils/getThirdPoint.js";
import createPipe from "./createPipe.js";

export const pipesConfig = {
  pipeRadius: 0.15,
  jointRadius: 0.225, // 0.2 * 1.5
  MAX_NODES: 300,
};

export default function createPipes({ bgState }) {
  bgState.pipes = {
    group: new Group(),
    nodes: [],
  };

  const material = new MeshBasicMaterial({ color: "red" });
  const firstSize = 1;
  bgState.pipes.nodes.push({ v: new Vector3(0, 0, 0), d: 0, axis: "x" });
  bgState.pipes.nodes.push({
    v: new Vector3(firstSize, 0, 0),
    d: firstSize,
    axis: "x",
  });
  for (let i = 0; i < pipesConfig.MAX_NODES; i++) addNewNode(nodes);
  for (let i = 0; i < nodes.length - 1; i++)
    bgState.pipes.group.add(
      createPipe(
        nodes[i].v,
        nodes[i + 1].v,
        material,
        pipesConfig.pipeRadius,
        nodes[i + 1]
      )
    );

  const pipesPosition = getThirdPoint(
    new Vector3(tx, ty, tz),
    new Vector3(px, py, pz)
  );
  const distance = new Vector3(0, 0, 0).distanceTo(new Vector3(px, py, pz));
  const scalar = distance / 28 + 1;
  bgState.pipes.group.scale.set(scalar, scalar, scalar);
  bgState.pipes.group.position.copy(pipesPosition);
  bgState.pipes.group.lookAt(new Vector3(0, 0, 0));
  bgState.pipes.group.name = "background";
  scene.add(bgState.pipes);
}
