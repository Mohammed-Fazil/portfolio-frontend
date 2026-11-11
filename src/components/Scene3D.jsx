import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 110;
const LINK_DISTANCE = 2.4;
const FIELD_RADIUS = 11;

function Scene3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 17);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const group = new THREE.Group();
    scene.add(group);

    // Nodes — services scattered through a spherical field

    const nodePositions = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 2;
      const radius = FIELD_RADIUS * (0.25 + Math.random() * 0.75);

      nodePositions[i * 3] = Math.cos(angle) * radius;
      nodePositions[i * 3 + 1] = height * 5.5;
      nodePositions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(nodePositions, 3),
    );

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.11,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    group.add(new THREE.Points(nodeGeometry, nodeMaterial));

    // Links — traffic between nearby services

    const linkPositions = [];

    for (let i = 0; i < NODE_COUNT; i += 1) {
      for (let j = i + 1; j < NODE_COUNT; j += 1) {
        const dx = nodePositions[i * 3] - nodePositions[j * 3];
        const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
        const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];

        if (Math.hypot(dx, dy, dz) < LINK_DISTANCE) {
          linkPositions.push(
            nodePositions[i * 3],
            nodePositions[i * 3 + 1],
            nodePositions[i * 3 + 2],
            nodePositions[j * 3],
            nodePositions[j * 3 + 1],
            nodePositions[j * 3 + 2],
          );
        }
      }
    }

    const linkGeometry = new THREE.BufferGeometry();
    linkGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linkPositions, 3),
    );

    const linkMaterial = new THREE.LineBasicMaterial({
      color: 0x2b3c60,
      transparent: true,
      opacity: 0.5,
    });

    group.add(new THREE.LineSegments(linkGeometry, linkMaterial));

    // Hubs — a few gateway nodes with halos

    const hubMaterial = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.55,
      wireframe: true,
    });

    const hubs = [];

    for (let i = 0; i < 4; i += 1) {
      const hub = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.34, 1),
        hubMaterial,
      );

      hub.position.set(
        nodePositions[i * 3],
        nodePositions[i * 3 + 1],
        nodePositions[i * 3 + 2],
      );

      hubs.push(hub);
      group.add(hub);
    }

    // Motion — slow drift plus pointer parallax

    let raf = null;
    let running = false;

    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };

    const render = () => {
      renderer.render(scene, camera);
    };

    const tick = () => {
      group.rotation.y += 0.0011;

      eased.x += (pointer.x - eased.x) * 0.04;
      eased.y += (pointer.y - eased.y) * 0.04;

      camera.position.x = eased.x * 1.6;
      camera.position.y = -eased.y * 1.1;
      camera.lookAt(0, 0, 0);

      const pulse = 1 + Math.sin(clock.getElapsedTime() * 1.4) * 0.12;
      hubMaterial.opacity = 0.4 + Math.sin(clock.getElapsedTime() * 1.4) * 0.15;
      hubs.forEach((hub, index) => {
        hub.scale.setScalar(
          pulse * (1 - index * 0.08) +
            Math.sin(clock.getElapsedTime() * (1.1 + index * 0.3)) * 0.08,
        );
      });

      render();

      raf = requestAnimationFrame(tick);
    };

    const clock = new THREE.Clock();

    const start = () => {
      if (running || reducedMotion) {
        return;
      }

      running = true;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;

      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };

    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const onResize = () => {
      const { clientWidth, clientHeight } = canvas;

      if (clientWidth === 0 || clientHeight === 0) {
        return;
      }

      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
      render();
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    if (reducedMotion) {
      group.rotation.y = 0.6;
      render();
    } else {
      window.addEventListener("pointermove", onPointerMove);
      document.addEventListener("visibilitychange", onVisibility);
      start();
    }

    window.addEventListener("resize", onResize);

    return () => {
      stop();

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);

      nodeGeometry.dispose();
      nodeMaterial.dispose();
      linkGeometry.dispose();
      linkMaterial.dispose();
      hubMaterial.dispose();
      hubs.forEach((hub) => hub.geometry.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas className="hero-scene" ref={canvasRef} aria-hidden="true" />;
}

export default Scene3D;
