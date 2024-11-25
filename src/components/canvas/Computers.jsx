import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* HemisphereLight para la luz ambiental */}
      <hemisphereLight intensity={0.5} groundColor="#555" />

      {/* Luz direccional para la iluminación difusa */}
      <directionalLight position={[0, 10, 0]} intensity={0.8} />

      {/* SpotLight para la luz principal */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.0001}
      />

      {/* PointLight para iluminación adicional */}
      <pointLight position={[2, 5, 5]} intensity={600} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, 0, -2.2] : [0, -1, -0.3]}
        rotation={[-0.01, -3, 0]}
      />
    </mesh>
  );
};

[0, -1, -0.3];

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mediaQuery = window.matchMedia('(max-width: 500px)');

  useEffect(() => {
    // const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [mediaQuery]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 25], fov: 8, exposure: 1.5 }}
      gl={{ preserveDrawingBuffer: true, clearColor: '#ffffff' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
