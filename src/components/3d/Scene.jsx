import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import Robot from './Robot'
import { Suspense } from 'react'

const Scene = ({ section }) => {
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    <group position={[1.5, -1, 0]}>
                        <Robot section={section} />
                    </group>

                    <ContactShadows
                        position={[0, -2, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2}
                        far={4.5}
                    />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Scene
