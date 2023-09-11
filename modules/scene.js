import * as THREE from "three";
import getAspectRatio from "./utils/getAspectRatio.js";

const createScene = ({
  fov,
  position: { x: px, y: py, z: pz },
  target: { x: tx, y: ty, z: tz },
}) => {
  const D = getAspectRatio();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.domElement.id = "uo";
  renderer.setSize(D, D);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(fov, 1, 1, 10000);

  camera.position.set(px, py, pz);
  const target = new THREE.Object3D();
  target.position.set(tx, ty, tz);
  camera.lookAt(target.position);
  camera.updateProjectionMatrix();

  return { scene, camera, renderer };
};

const handleResize = (camera, renderer, render, frame) =>
  window.addEventListener(
    "resize",
    () => {
      const D = getAspectRatio();
      camera.updateProjectionMatrix();
      renderer.setSize(D, D);
      render();
      if (frame) {
        frame.style.height = `${D}px`;
        frame.style.width = `${D}px`;
        frame.style.left = frame.style.top = ` calc(50% - ${D / 2}px)`;
      }
    },
    false
  );

export { createScene, handleResize };
