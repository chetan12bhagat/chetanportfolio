import React from 'react'
import { motion } from 'framer-motion'

const VideoPreview = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Website Preview</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Experience the fluid animations and interactive 3D elements that make this portfolio unique.
                    </p>
                </motion.div>

                {/* MacBook Mockup */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="relative group cursor-pointer"
                >
                    {/* Bezel */}
                    <div className="w-[300px] h-[200px] sm:w-[500px] sm:h-[320px] lg:w-[800px] lg:h-[500px] bg-slate-900 rounded-[2rem] border-[12px] border-slate-800 shadow-2xl relative overflow-hidden">
                        {/* Camera */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black z-10" />

                        {/* "Screen" Content */}
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-white/5 transition-opacity group-hover:bg-transparent" />

                            {/* Simulated Content */}
                            <div className="z-10 text-center">
                                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-accent border-b-[10px] border-b-transparent ml-1" />
                                </div>
                                <p className="text-accent font-mono uppercase tracking-widest text-sm">Play Preview</p>
                            </div>
                        </div>
                    </div>

                    {/* Base */}
                    <div className="w-[340px] h-[10px] sm:w-[580px] lg:w-[940px] bg-slate-800 mx-auto rounded-b-xl shadow-xl mt-[-2px] relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] bg-slate-900 rounded-b-lg" />
                    </div>

                    {/* Glow Effect Removed or Toned Down */}
                    <div className="absolute -inset-10 bg-accent/5 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                <p className="mt-12 text-slate-400 italic text-sm">
                    “See how this portfolio works”
                </p>
            </div>
        </section>
    )
}


export default VideoPreview
