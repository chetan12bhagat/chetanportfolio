import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import dipexCertificate from '../../images/Dipex.jpg'

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6 md:px-20 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 text-black">
                    <span className="text-black/40">03.</span> Achievements
                </h2>

                {/* DIPEX Certificate Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-10 items-start"
                >
                    {/* Certificate Image */}
                    <a
                        href={dipexCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-64 flex-shrink-0"
                    >
                        <motion.img
                            whileHover={{ scale: 1.03 }}
                            src={dipexCertificate}
                            alt="DIPEX State Level Exhibition Certificate"
                            className="w-full rounded-lg shadow-xl border-2 border-slate-200 hover:border-accent transition-all duration-300 hover:shadow-2xl cursor-pointer"
                        />
                        <p className="text-center text-xs text-slate-500 mt-2 font-mono">
                            Click to view certificate
                        </p>
                    </a>

                    {/* Certificate Info */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <FaTrophy className="text-accent" />
                            DIPEX – State Level Exhibition
                        </h3>

                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Participated in <strong>DIPEX (District Industrial & Project Exhibition)</strong>,
                            a prestigious <strong>state-level exhibition</strong> showcasing innovative
                            engineering and technology projects. This experience strengthened my
                            problem-solving skills, presentation abilities, and real-world application
                            thinking.
                        </p>

                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center gap-2">
                                <span className="text-accent">•</span>
                                <strong>Level:</strong> State Level
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-accent">•</span>
                                <strong>Category:</strong> Engineering & Technology
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-accent">•</span>
                                <strong>Year:</strong> 2023
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Achievements
