'use client'

import { Canvas } from '@react-three/fiber'

export function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>   
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />  
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}