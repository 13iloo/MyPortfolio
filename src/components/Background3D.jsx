import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GeometricShape = () => {
  const ref = useRef();
  const scrollRef = useRef(0);
  const lastScrollRef = useRef(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    const scrollY = scrollRef.current;
    const lastScrollY = lastScrollRef.current;
    
    // Calculate scroll delta
    const scrollDelta = scrollY - lastScrollY;
    
    // Apply rotation based on scroll movement with inertia
    if (Math.abs(scrollDelta) > 0.1) {
        ref.current.rotation.x += scrollDelta * 0.001;
        ref.current.rotation.y += scrollDelta * 0.002;
    } else {
        ref.current.rotation.x += delta * 0.05;
        ref.current.rotation.y += delta * 0.02;
    }
    
    lastScrollRef.current = scrollY;

    // Scroll-based scaling
    const targetScale = 2 + (scrollY * 0.0015); 
    ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.1);
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, targetScale, 0.1);
    ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, targetScale, 0.1);

    // Scroll-based horizontal movement
    const targetX = Math.min(0, -2.5 + (scrollY * 0.005));
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, 0.1);

    // Animate emissive intensity for glistening effect (brighter)
    if (ref.current.material) {
      const glisten = Math.sin(state.clock.elapsedTime * 1.5) * 0.4 + 0.8;
      ref.current.material.emissiveIntensity = glisten;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron args={[1, 4]} ref={ref} scale={[2, 2, 2]}>
            <MeshDistortMaterial
                color="#0FA4AF"
                emissive="#FFD700" // Yellow glow
                emissiveIntensity={0.8}
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.1}
                metalness={0.9}
                wireframe={true}
            />
        </Icosahedron>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'linear-gradient(to bottom, #003135 0%, #000000 100%)' // Deep Teal gradient
    }}>
      {/* Dark overlay for entire page */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
      }}></div>
      <Canvas camera={{ position: [0, 0, 5] }} style={{ position: 'relative', zIndex: 0 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#964734" />
        <GeometricShape />
      </Canvas>
    </div>
  );
};

export default Background3D;
