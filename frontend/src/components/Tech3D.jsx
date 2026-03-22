import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Box({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  )
}

export default function Tech3D() {
  return (
    <Canvas style={{ height: "300px" }}>
      <ambientLight />
      <pointLight position={[10,10,10]} />

      <Box position={[0,0,0]} />
      <Box position={[2,0,0]} />
      <Box position={[-2,0,0]} />

      <OrbitControls />
    </Canvas>
  )
}
