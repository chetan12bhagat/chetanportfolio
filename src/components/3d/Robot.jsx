import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshWobbleMaterial, Sphere, Box } from '@react-three/drei'
import * as THREE from 'three'

const Robot = ({ section }) => {
    const group = useRef()
    const head = useRef()
    const leftEye = useRef()
    const rightEye = useRef()
    const rightArm = useRef()
    const body = useRef()

    const [blink, setBlink] = useState(false)
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const isMobile = window.innerWidth < 768

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink(true)
            setTimeout(() => setBlink(false), 150)
        }, 4000)
        return () => clearInterval(blinkInterval)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouse({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame((state) => {
        if (!group.current || isMobile) return
        const t = state.clock.getElapsedTime()

        // Smooth head follow mouse
        if (head.current) {
            head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, mouse.x * 0.5, 0.1)
            head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -mouse.y * 0.5, 0.1)
        }

        // Floating motion
        group.current.position.y = Math.sin(t) * 0.1

        // Section based animations
        switch (section) {
            case 'hero':
                // Wave hello
                if (rightArm.current) {
                    rightArm.current.rotation.z = Math.sin(t * 4) * 0.5 + 0.5
                    rightArm.current.rotation.x = -1
                }
                break
            case 'about':
                // Nod
                if (head.current) {
                    head.current.rotation.x += Math.sin(t * 6) * 0.1
                }
                break
            case 'skills':
                // Scanning
                if (head.current) {
                    head.current.rotation.y = Math.sin(t * 2) * 1
                }
                break
            case 'projects':
                // Pointing (simplified as looking intensely)
                if (head.current) {
                    head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, mouse.x * 1, 0.1)
                }
                break
            case 'resume':
                // Salute
                if (rightArm.current) {
                    rightArm.current.rotation.z = THREE.MathUtils.lerp(rightArm.current.rotation.z, 2.5, 0.1)
                    rightArm.current.rotation.x = THREE.MathUtils.lerp(rightArm.current.rotation.x, -0.5, 0.1)
                }
                break
            case 'contact':
                // Heart pulse effect (changing color slightly)
                if (body.current) {
                    body.current.material.emissiveIntensity = Math.sin(t * 10) * 0.5 + 0.5
                }
                break
            default:
                // Idle
                if (rightArm.current) {
                    rightArm.current.rotation.z = THREE.MathUtils.lerp(rightArm.current.rotation.z, 0, 0.1)
                    rightArm.current.rotation.x = THREE.MathUtils.lerp(rightArm.current.rotation.x, 0, 0.1)
                }
                break
        }
    })

    if (isMobile) return null

    return (
        <group ref={group}>
            {/* Body */}
            <mesh ref={body} position={[0, -0.2, 0]}>
                <boxGeometry args={[0.6, 0.7, 0.4]} />
                <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} emissive="#00f3ff" emissiveIntensity={0.1} />
            </mesh>

            {/* Head */}
            <group ref={head} position={[0, 0.4, 0]}>
                <mesh>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Eyes */}
                <mesh ref={leftEye} position={[-0.1, 0.05, 0.25]} scale={[1, blink ? 0.1 : 1, 1]}>
                    <sphereGeometry args={[0.04, 16, 16]} />
                    <meshBasicMaterial color="#00f3ff" />
                </mesh>
                <mesh ref={rightEye} position={[0.1, 0.05, 0.25]} scale={[1, blink ? 0.1 : 1, 1]}>
                    <sphereGeometry args={[0.04, 16, 16]} />
                    <meshBasicMaterial color="#00f3ff" />
                </mesh>
            </group>

            {/* Arms */}
            <mesh position={[-0.4, 0, 0]}>
                <boxGeometry args={[0.1, 0.4, 0.1]} />
                <meshStandardMaterial color="#444" />
            </mesh>
            <group ref={rightArm} position={[0.4, 0.1, 0]}>
                <mesh position={[0, -0.15, 0]}>
                    <boxGeometry args={[0.1, 0.4, 0.1]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
            </group>

            {/* Shoulders / Joints */}
            <mesh position={[-0.3, 0.1, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#666" />
            </mesh>
            <mesh position={[0.3, 0.1, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#666" />
            </mesh>
        </group>
    )
}

export default Robot
