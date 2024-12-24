import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Group as ThreeGroup } from 'three';

const RotatingCube: React.FC<{ autoRotate: boolean }> = ({ autoRotate }) => {
  const meshRef = useRef<ThreeGroup | null>(null);
  const { scene } = useGLTF("/model/socion/socion.gltf");

  useFrame(() => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} />
    </group>
  );
};

const Model: React.FC = () => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <Canvas className="mt-10"
      camera={{ position: [0, 0, 26] }}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "65vw",
        height: "65vh",
        zIndex: 0,
      }}
      onPointerDown={() => setAutoRotate(false)}
      onPointerUp={() => setAutoRotate(true)}
      onPointerLeave={() => setAutoRotate(true)}
    >
      {/* Orbit Controls */}
      <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color={0xaa6dfc} />
      <directionalLight position={[10, 10, -10]} intensity={1} color={0xaa6dfc} />
      <directionalLight position={[10, -10, 10]} intensity={1} color={0xaa6dfc} />
      <directionalLight position={[10, -10, -10]} intensity={1} color={0xaa6dfc} />
      <directionalLight position={[-10, 10, 10]} intensity={1} color={0xaa6dfc} />
      <directionalLight position={[-10, 10, -10]} intensity={1} color={0xaa6dfc} />
      <directionalLight position={[-10, -10, 10]} intensity={1} color={0xaa6dfc} />
      <directionalLight position={[-10, -10, -10]} intensity={1} color={0xaa6dfc} />

      {/* GLTF Model */}
      <Suspense fallback={null}>
        <RotatingCube autoRotate={autoRotate} />
      </Suspense>
      
    </Canvas>
  );
};

export default Model;
