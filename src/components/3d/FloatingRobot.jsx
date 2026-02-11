import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment, ContactShadows, Float, MeshDistortMaterial, Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { useSectionObserver } from '../../hooks/useSectionObserver'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

// Minimalist Robot Model
const RobotModel = ({ activeSection, mouse, onToggleMenu, isProjectHovered }) => {
    const group = useRef()
    const head = useRef()
    const eyes = useRef()
    const [hovered, setHovered] = useState(false)

    // Section goals (3D coordinates) - mapped to quadrants
    const sectionPositions = {
        home: [2, 1, 0],
        about: [-2, 0, 0],
        resume: [-2, -0.8, 0],
        skills: [2, 0, 0],
        projects: [2, -1, 0],
        'mobile-apps': [-2, -1, 0],
        contact: [-2, -1.5, 0],
        default: [0, 0, 0]
    }

    const targetPos = isProjectHovered ? [1.5, -0.8, 1] : (sectionPositions[activeSection] || sectionPositions.default)

    useFrame((state) => {
        if (!group.current) return
        const t = state.clock.getElapsedTime()

        // Smooth position transition
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetPos[0], 0.05)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetPos[1] + Math.sin(t * 1.5) * 0.1, 0.05)
        group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, targetPos[2], 0.05)

        // Subtle head turn towards mouse
        if (head.current) {
            head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, (mouse.x * Math.PI) / 10, 0.05)
            head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, (-mouse.y * Math.PI) / 12, 0.05)
        }

        // Gentle breathing rotation
        group.current.rotation.z = Math.sin(t * 0.5) * 0.05

        // Hover effect
        const s = hovered ? 1.1 : 1
        group.current.scale.set(
            THREE.MathUtils.lerp(group.current.scale.x, s, 0.1),
            THREE.MathUtils.lerp(group.current.scale.y, s, 0.1),
            THREE.MathUtils.lerp(group.current.scale.z, s, 0.1)
        )
    })

    return (
        <group ref={group}>
            {/* Body Core */}
            <mesh castShadow>
                <sphereGeometry args={[0.35, 32, 32]} />
                <meshStandardMaterial color="#111" roughness={0.9} metalness={0.1} />
            </mesh>

            {/* High Tech Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.42, 0.01, 16, 100]} />
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
            </mesh>

            {/* Head Unit */}
            <group ref={head} position={[0, 0.45, 0]}>
                <mesh castShadow>
                    <boxGeometry args={[0.4, 0.25, 0.3]} />
                    <meshStandardMaterial color="#222" roughness={0.5} />
                </mesh>

                {/* Neon Eyes */}
                <group ref={eyes} position={[0, 0, 0.16]}>
                    <mesh position={[-0.1, 0, 0]}>
                        <planeGeometry args={[0.08, 0.02]} />
                        <meshBasicMaterial color="#00f3ff" />
                    </mesh>
                    <mesh position={[0.1, 0, 0]}>
                        <planeGeometry args={[0.08, 0.02]} />
                        <meshBasicMaterial color="#00f3ff" />
                    </mesh>
                </group>

                {/* Internal Glow */}
                <pointLight position={[0, 0, 0.1]} intensity={0.5} color="#00f3ff" distance={1} />
            </group>

            {/* Interactive Overlay & Label */}
            <Html center>
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleMenu();
                    }}
                    className={`
                        w-24 h-24 rounded-full cursor-pointer pointer-events-auto flex items-center justify-center
                        transition-all duration-300 relative
                    `}
                >
                    {hovered && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-accent border border-accent/20 font-mono whitespace-nowrap animate-in fade-in zoom-in duration-200">
                            ASSISTANT V1.0
                        </div>
                    )}
                </div>
            </Html>
        </group>
    )
}

const NavMenu = ({ isOpen, onNavigate }) => {
    const items = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'mobile-apps', label: 'Mobile Apps' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10001] flex flex-col items-center gap-4 pointer-events-auto"
                >
                    <div className="absolute -inset-20 bg-accent/5 blur-3xl -z-10 rounded-full" />
                    {items.map((item, i) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => onNavigate(item.id)}
                            className="text-2xl md:text-4xl font-bold text-white hover:text-accent transition-all duration-300 tracking-tighter hover:tracking-normal"
                        >
                            {item.label}
                        </motion.button>
                    ))}
                    <button
                        onClick={() => onNavigate(null)}
                        className="mt-8 text-xs font-mono text-gray-500 hover:text-white uppercase tracking-widest"
                    >
                        Close Menu
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

const FloatingRobot = () => {
    const activeSection = useSectionObserver(['home', 'about', 'resume', 'skills', 'projects', 'mobile-apps', 'contact'])
    const scrollTo = useSmoothScroll()
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProjectHovered, setIsProjectHovered] = useState(false)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    useEffect(() => {
        const handleProjectHover = (e) => setIsProjectHovered(e.detail.active)
        window.addEventListener('projectHover', handleProjectHover)
        return () => window.removeEventListener('projectHover', handleProjectHover)
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

    const handleNavigate = (id) => {
        if (id) scrollTo(id)
        setIsMenuOpen(false)
    }

    return (
        <>
            <div className={`fixed top-24 lg:top-28 left-0 right-0 bottom-0 pointer-events-none z-[1000] transition-opacity duration-500 ${isMenuOpen ? 'opacity-20' : 'opacity-100'}`}>
                <Canvas shadows dpr={[1, 2]} className="pointer-events-none">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={isMobile ? 50 : 40} />
                    <ambientLight intensity={0.4} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                    <RobotModel
                        activeSection={activeSection}
                        mouse={mouse}
                        isProjectHovered={isProjectHovered}
                        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                    />

                    <Environment preset="night" />
                    {!isMobile && <ContactShadows resolution={1024} scale={10} blur={2.5} opacity={0.4} far={10} color="#000" />}
                </Canvas>

                {/* Visual Hint */}
                {!isMenuOpen && (
                    <div className="absolute bottom-10 left-10 text-[10px] font-mono text-gray-500 animate-pulse pointer-events-none uppercase tracking-widest hidden md:block">
                        Click assistance to Navigate
                    </div>
                )}
            </div>

            <NavMenu isOpen={isMenuOpen} onNavigate={handleNavigate} />

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    )
}

export default FloatingRobot
