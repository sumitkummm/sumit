import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1 + scrollY * 0.0005;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15 + scrollY * 0.001;
    
    const scale = 1.2 + Math.sin(scrollY * 0.002) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#00e5ff"
            speed={2}
            distort={0.3}
            radius={1}
            wireframe
            opacity={0.3}
            transparent
          />
        </Sphere>
      </Float>
      {/* Secondary subtle sphere */}
      <Sphere args={[1.5, 32, 32]} scale={2}>
        <meshBasicMaterial color="#2979ff" wireframe opacity={0.05} transparent />
      </Sphere>
    </group>
  );
}

export default function ThreeScene({ scrollY }: { scrollY: number }) {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00e5ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffd600" />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
        <AnimatedSphere scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
