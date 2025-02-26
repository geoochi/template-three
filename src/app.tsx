import * as THREE from 'three'
import { useEffect, useRef } from 'react'

export default function App() {
  const domElement = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
    domElement.current?.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    function animate() {
      renderer.render(scene, camera)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
    }
    renderer.setAnimationLoop(animate)
  }, [])
  return (
    <div
      ref={domElement}
      className='flex flex-col h-screen items-center justify-center'
    ></div>
  )
}
