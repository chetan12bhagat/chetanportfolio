import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import aniproImg from '../../images/anipro.live.png';
import spotlightImg from '../../images/spotlight.png';
import bella1 from '../../images/bella-1.png';

const DeviceFrame = ({ children, type, label, icon: Icon }) => {
    const frames = {
        laptop: "w-full max-w-4xl aspect-[16/10] border-[12px] border-slate-900 rounded-t-2xl shadow-2xl relative",
        tablet: "w-full max-w-sm aspect-[3/4] border-[10px] border-slate-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden",
        mobile: "w-full max-w-[240px] aspect-[9/19.5] border-[8px] border-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden"
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                <Icon size={14} />
                {label}
            </div>
            <div className={frames[type]}>
                {children}
                {type === 'laptop' && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-slate-800 rounded-b-xl" />
                )}
                {type === 'tablet' && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-800 rounded-full" />
                )}
                {type === 'mobile' && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full flex items-center justify-end px-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    </div>
                )}
            </div>
        </div>
    );
};

const DeviceShowcase = () => {
    return (
        <section className="py-32 px-6 md:px-20 bg-slate-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Built for all screens
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        My applications are designed with a mobile-first philosophy, 
                        ensuring a premium experience whether you're on a 4K monitor or a smartphone.
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 lg:h-[700px]">
                    {/* Laptop - Back Center */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:absolute lg:z-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[800px]"
                    >
                        <DeviceFrame type="laptop" label="Desktop Experience" icon={FaLaptop}>
                            <img src={aniproImg} className="w-full h-full object-cover rounded-sm" alt="Desktop View" />
                        </DeviceFrame>
                    </motion.div>

                    {/* Tablet - Front Left */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:absolute lg:z-10 lg:left-[10%] lg:bottom-10 w-full lg:max-w-xs"
                    >
                        <DeviceFrame type="tablet" label="Tablet Flow" icon={FaTabletAlt}>
                            <img src={spotlightImg} className="w-full h-full object-cover" alt="Tablet View" />
                        </DeviceFrame>
                    </motion.div>

                    {/* Mobile - Front Right */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:absolute lg:z-20 lg:right-[15%] lg:bottom-0 w-full lg:max-w-[200px]"
                    >
                        <DeviceFrame type="mobile" label="Mobile First" icon={FaMobileAlt}>
                            <img src={bella1} className="w-full h-full object-cover" alt="Mobile View" />
                        </DeviceFrame>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DeviceShowcase;
