import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaExpand } from 'react-icons/fa';
import cvImage from '../../images/chetanResume.jpg';

const CV = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <section id="cv" className="py-24 px-6 md:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 text-black">
                    <span className="text-black/40">04.</span> Curriculum Vitae
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                    {/* CV Image Preview */}
                    <div className="relative group cursor-pointer w-full max-w-md" onClick={() => setIsZoomed(true)}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative overflow-hidden rounded-xl shadow-2xl border border-slate-200"
                        >
                            <img
                                src={cvImage}
                                alt="Chetan Bhagat CV"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="bg-white p-4 rounded-full shadow-lg"
                                >
                                    <FaExpand className="text-slate-900" size={20} />
                                </motion.div>
                            </div>
                        </motion.div>
                        <p className="text-center text-sm text-slate-500 mt-4 font-mono">
                            Click to enlarge CV
                        </p>
                    </div>

                    {/* CV Description & Download */}
                    <div className="flex-1 space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900">Professional Summary</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            A highly motivated Software Engineer with a focus on Frontend and Mobile App Development. 
                            Passionate about building clean, efficient, and user-centric applications using React, React Native, and modern web technologies.
                        </p>
                        
                        <div className="pt-4">
                            <a
                                href="/chetanResumefinal (1).pdf"
                                download="Chetan_Bhagat_CV.pdf"
                                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                            >
                                <FaDownload />
                                Download PDF Version
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-1">Experience</h4>
                                <p className="text-slate-500 text-sm">Focused on MERN & React Native</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-1">Education</h4>
                                <p className="text-slate-500 text-sm">B.Tech in IT (2023-2026)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zoomed Image Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                        onClick={() => setIsZoomed(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={cvImage}
                                alt="Chetan Bhagat CV Full"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-white/10"
                            />
                            
                            <button
                                onClick={() => setIsZoomed(false)}
                                className="absolute top-0 right-0 md:-top-8 md:-right-8 text-white p-2 hover:text-slate-300 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CV;
