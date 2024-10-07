import { useTexture } from "@react-three/drei"
import { RootState, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";
import { DoubleSide } from "three"


export const Sphere = () => {

  const sphereRef = useRef<Mesh | null>(null);
  useFrame((state:RootState, delta: number) => {
if(sphereRef.current){
  // sphereRef.current.rotation.x += delta
  sphereRef.current.rotation.y += delta * 0.5 
}
  })
  const [diffTex, disTex, norTex, aoTex] = useTexture([
    'textures/diffTexture.jpg',
    'textures/dispTexture.jpg',
    'textures/norTexture.jpg',
    'textures/armTexture.jpg'
  ])
  return (
    <>
        <mesh scale={2} ref={sphereRef} castShadow receiveShadow >
            <sphereGeometry args={[1,128, 100]} ></sphereGeometry>
            <meshStandardMaterial side={DoubleSide} map={diffTex} displacementMap={disTex} displacementScale={0.15} normalMap={norTex}  aoMap={aoTex} aoMapIntensity={1.0} roughnessMap={aoTex} roughness={0.9} metalnessMap={aoTex} metalness={0.1}   ></meshStandardMaterial>
        </mesh>
    </>
  )
}
