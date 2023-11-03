import { Box3, Vector3 } from "three";
import R from "../../utils/R.js";

const axes = ["x", "y", "z"];

const gridBounds = new Box3(
  new Vector3(-10, -10, -10),
  new Vector3(10, 10, 10)
);

let lastAxis = "x";

const addNewNode = (nodes) => {
  if (!nodes.length) return;
  const latest = nodes[nodes.length - 1];
  const newAxes = axes.filter((el) => el !== lastAxis);
  const axis = R.random_choice(newAxes);
  const newNode = latest.v.clone();
  const d = R.random_int(-10, 10);
  newNode[axis] = latest.v[axis] + d;

  if (!gridBounds.containsPoint(newNode)) return;
  lastAxis = axis;
  nodes.push({ v: newNode, d, axis });
};

export default addNewNode;
