
import { Canvas } from "@react-three/fiber"
import { Sphere } from "./Sphere"
import "./App.css"
import { Environment, OrbitControls } from "@react-three/drei"

function App() {


  return (
    <>
      <Canvas style={{background : '#3D3B3B'}}>
        <ambientLight intensity={1}></ambientLight>
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <OrbitControls></OrbitControls>
        <Environment preset="sunset"/> 
        <Sphere></Sphere>
      </Canvas>
    </>
  )
}

export default App
