import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const headingRef = useRef()

    useEffect(() => {
        gsap.fromTo(headingRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true
                }
            }
        )
    }, [])
    const experiences = [
        {
            title: 'Android Development Intern',
            company: 'Techoxy Pvt Ltd',
            period: '2024',
            type: 'exp'
        },
        {
            title: 'B-Tech IT (Degree)',
            company: 'Current CGPA: 8.87',
            period: '2023 – 2026',
            type: 'edu'
        },
        {
            title: 'Diploma Computer Engineering',
            company: 'Percentage: 83.43%',
            period: '2020 – 2023',
            type: 'edu'
        }
    ]

    return (
        <section id="about" className="py-24 px-6 md:px-20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16"
                >
                    <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                        <span className="text-accent">01.</span> About Me
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 text-lg leading-relaxed">
                        <div>
                            <p className="mb-6">
                                I am a focused developer from Maharashtra, India, pursuing my B-Tech in Information Technology.
                                My journey in tech started with a Diploma where I fell in love with coding and solving logic puzzles.
                            </p>
                            <p>
                                Currently, I specialize in building cross-platform mobile apps using React Native and
                                scalable web backends with Node.js. I believe in writing clean, documented, and
                                efficient code.
                            </p>
                        </div>

                        <div id="resume" className="space-y-6">
                            <h3 className="text-slate-900 font-bold text-xl flex items-center gap-3">
                                <FaBriefcase className="text-accent" /> Experience & Education
                            </h3>
                            <div className="relative border-l border-slate-200 pl-8 space-y-8">
                                {experiences.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-2 border-accent shadow-sm" />
                                        <div className="text-accent text-sm font-mono mb-1">{item.period}</div>
                                        <h4 className="text-slate-900 font-bold">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.company}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
