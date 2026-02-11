import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import resumeImg from '../../images/chetanResume.jpg'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center px-6 md:px-20 relative overflow-hidden bg-grid pt-28 lg:pt-32">
            {/* Background Glow */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full pt-20 lg:pt-0">
                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent font-mono mb-4 text-lg">Hi, my name is</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                        Chetan Bhagat
                    </h1>
                    <div className="text-2xl md:text-4xl font-semibold mb-8 h-20">
                        <span className="text-slate-600 text-shadow-sm">I'm a </span>
                        <span className="text-accent underline decoration-accent/30 underline-offset-8">
                            <Typewriter
                                words={['Full-Stack Developer', 'React Native Developer', 'Mobile App Developer']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>

                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                        Crafting high-performance web and mobile experiences. B-Tech student with a passion for building scalable, user-centric applications that solve real-world problems.
                    </p>
                    {/* Resume Preview with Buttons */}
                    <div className="flex items-start gap-6 mt-6">
                        {/* Resume Image */}
                        <motion.a
                            href="https://drive.google.com/file/d/13U-1OlSbGmZraN9q4-xXESwourwUzMqR/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block w-40 flex-shrink-0"
                        >
                            <img
                                src={resumeImg}
                                alt="Chetan Bhagat Resume"
                                className="w-full rounded-lg shadow-xl border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                            />
                            <p className="text-center text-xs text-slate-500 mt-2 font-mono">
                                Click to view
                            </p>
                        </motion.a>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 pt-2">
                            <motion.a
                                href="https://drive.google.com/uc?export=download&id=13U-1OlSbGmZraN9q4-xXESwourwUzMqR"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-center whitespace-nowrap"
                            >
                                Download Resume
                            </motion.a>
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const el = document.getElementById('projects');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-6 py-3 border-2 border-slate-300 text-slate-900 bg-slate-50 text-sm font-medium rounded-full hover:border-accent hover:bg-white transition-all duration-300 whitespace-nowrap"
                            >
                                View Projects
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Empty (Robot is global) */}
                <div className="hidden lg:block"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            </div>
        </section>
    )
}

export default Hero
