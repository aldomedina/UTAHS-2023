import createJoint from "./createJoint.js";

let active = 0;

export default function handlePipesAnimation(pipes) {
  const { nodes } = pipes;
  if (
    pipes.group.children[pipes.active] &&
    pipes.group.children[pipes.active].scale.y < 1
  ) {
    const speed = 1;
    const mag = (nodes[pipes.active + 1].d * speed) / 2;

    pipes.group.children[pipes.active].scale.y += speed;
    pipes.group.children[pipes.active].position[nodes[pipes.active + 1].axis] +=
      mag;
  }

  if (
    pipes.group.children[pipes.active] &&
    nodes[pipes.active + 1] &&
    pipes.group.children[pipes.active].scale.y >= 1 &&
    pipes.active < pipes.group.children.length
  ) {
    const joint = createJoint(nodes[pipes.active + 1].v);
    pipes.group.add(joint);

    pipes.active = pipes.active + 1;
  }
}
