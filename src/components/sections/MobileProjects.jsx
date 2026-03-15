import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaInfoCircle, FaTimes, FaCheck, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { 
    SiReact, 
    SiFirebase, 
    SiTailwindcss, 
    SiThemoviedatabase, 
    SiOpenai,
    SiRedux
} from 'react-icons/si';
import bella1 from '../../images/bella-1.png';
import bella2 from '../../images/bella-2.png';
import bella3 from '../../images/bella-3.png';
import bellaVideo from '../../video/bella-brew.mp4';

import kisan1 from '../../images/kisan-1.png';
import kisan2 from '../../images/kisan-2.png';
import kisan3 from '../../images/kisan-3.png';
import kisanVideo from '../../video/kisan-saathi.mp4';

import movie1 from '../../images/movie app 1.jpeg';
import movie2 from '../../images/movie app 2.jpeg';
import movie3 from '../../images/movie app 3.jpeg';
import movieVideo from '../../video/movie app.mp4';

// HIGH-FIDELITY IPHONE 16 PRO MOCKUP (PRO-SCALE)
const Phone = ({ src, size = "default", className = "" }) => (
    <div className={`relative aspect-[9/19.5] mx-auto overflow-visible rounded-[3.2rem] 
                    shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] 
                    ${size === "large" ? "w-[280px]" : "w-[180px]"} ${className}`}>
        
        {/* Natural Titanium Frame (Metallic Gradient) */}
        <div className="absolute -inset-[2.5px] rounded-[3.4rem] bg-gradient-to-b from-[#c8c8c8] via-[#a0a0a0] to-[#808080] z-0 ring-1 ring-slate-400/30" />
        
        {/* Ultra-Thin Bezel */}
        <div className="absolute inset-[1.5px] bg-black rounded-[3.2rem] z-10 overflow-hidden ring-1 ring-white/5">
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-11 h-4 bg-black rounded-full z-40 flex items-center justify-end px-1.5 gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-white/5 opacity-80" />
            </div>

            <img src={src} className="w-full h-full object-cover" alt="iPhone Screen" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none z-30" />
        </div>
    </div>
);

const PhoneVideo = ({ src, size = "default", className = "" }) => (
    <div className={`relative aspect-[9/19.5] mx-auto overflow-visible rounded-[3.2rem] 
                    shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] 
                    ${size === "large" ? "w-[280px]" : "w-[180px]"} ${className}`}>
        
        <div className="absolute -inset-[2.5px] rounded-[3.4rem] bg-gradient-to-b from-[#c8c8c8] via-[#a0a0a0] to-[#808080] z-0 ring-1 ring-slate-400/30" />
        
        <div className="absolute inset-[1.5px] bg-black rounded-[3.2rem] z-10 overflow-hidden ring-1 ring-white/5">
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-11 h-4 bg-black rounded-full z-40 flex items-center justify-end px-1.5 gap-0.5" />
            <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover bg-black">
                <source src={src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none z-30" />
        </div>
    </div>
);

const MobileProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Bella Brew Café",
            description: "A premium coffee ordering experience with Zen-inspired aesthetics and seamless flow.",
            longDescription: "Bella Brew is more than just an app; it's a Zen-inspired digital sanctuary for coffee lovers. Designed with a focus on tranquility and flow, it simplifies the complex ordering process into a series of calm, intuitive interactions.",
            features: [
                "Intuitive Menu Discovery",
                "Real-time Order Tracking",
                "Secure Multi-Payment Gateway",
                "Zen-Inspired UI/UX Animations"
            ],
            screens: [bella1, bella2, bella3],
            video: bellaVideo,
            tags: [
                { name: "React Native", icon: SiReact, color: "#61DAFB" },
                { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
                { name: "Zustand", icon: SiRedux, color: "#764ABC" } // Redux icon as proxy for state mgmt if Zustand not found
            ],
            installUrl: "#"
        },
        {
            title: "Kisan Saathi App",
            description: "Empowering farmers with AI-driven crop insights and real-time agricultural data.",
            longDescription: "Kisan Saathi is a vital companion for the modern farmer. By leveraging AI disease detection and real-time localized weather data, it empowers agricultural workers with scientific insights delivered through a simple, multilingual interface.",
            features: [
                "AI Leaf Disease Detection",
                "Localized Weather Analytics",
                "Direct Market Price Tracking",
                "Offline Information Syncing"
            ],
            screens: [kisan1, kisan2, kisan3],
            video: kisanVideo,
            tags: [
                { name: "Cross-Platform", icon: FaMobileAlt, color: "#3B82F6" },
                { name: "ML Integration", icon: SiOpenai, color: "#412991" },
                { name: "Cloud Firestore", icon: SiFirebase, color: "#FFCA28" }
            ],
            installUrl: "#"
        },
        {
            title: "Movie Preview App",
            description: "Dynamic cinema discovery platform featuring smooth transitions and rich media.",
            longDescription: "A high-performance entertainment hub built to showcase the fluid capabilities of React Native. Integrated with the TMDB API, it offers a cinematic browsing experience with high-fidelity trailer playback and persistent watchlist state management.",
            features: [
                "4K Trailer Integration",
                "Dynamic Category Filtering",
                "Local Persisted Watchlist",
                "Native-Performance Gestures"
            ],
            screens: [movie1, movie2, movie3],
            video: movieVideo,
            tags: [
                { name: "React Native", icon: SiReact, color: "#61DAFB" },
                { name: "NativeWind", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "TMDB API", icon: SiThemoviedatabase, color: "#01B4E4" }
            ],
            installUrl: "#"
        }
    ];

    return (
        <section id="mobile-projects" className="py-32 px-6 md:px-20 bg-slate-50/30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-black mb-24">
                    <span className="text-black/40">02.</span> Mobile Projects
                </h2>

                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <div key={project.title} className="group">
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="lg:w-1/3 order-2 lg:order-1 text-center lg:text-left">
                                    <h3 className="text-4xl font-bold text-slate-900 mb-4">{project.title}</h3>
                                    <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
                                        {project.tags.map(tag => (
                                            <span key={tag.name} className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-500 shadow-sm">
                                                <tag.icon style={{ color: tag.color }} size={14} />
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex flex-row gap-3 justify-center lg:justify-start">
                                        <button 
                                            onClick={() => window.open(project.installUrl, '_blank')}
                                            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all hover:scale-105 shadow-xl shadow-slate-900/10 flex items-center gap-2 whitespace-nowrap text-sm md:text-base"
                                        >
                                            <FaDownload size={14} />
                                            Install App
                                        </button>
                                        <button 
                                            onClick={() => setSelectedProject(project)}
                                            className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all hover:scale-105 shadow-md flex items-center gap-2 whitespace-nowrap text-sm md:text-base"
                                        >
                                            <FaInfoCircle size={14} />
                                            More Info
                                        </button>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 order-1 lg:order-2 w-full">
                                    <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
                                        <div className="z-20 transition-transform duration-700 group-hover:scale-110">
                                            <PhoneVideo size="large" src={project.video} />
                                        </div>
                                        <div className="absolute left-[-5%] sm:left-0 md:left-10 top-10 z-10 opacity-30 group-hover:opacity-100 transition-all duration-1000 translate-x-10 group-hover:translate-x-0 group-hover:translate-y-[-20px] rotate-[-12deg] group-hover:rotate-[-8deg] scale-90 group-hover:scale-100 hidden sm:block">
                                            <Phone src={project.screens[0]} />
                                        </div>
                                        <div className="absolute right-[-5%] sm:right-0 md:right-10 bottom-10 z-10 opacity-30 group-hover:opacity-100 transition-all duration-1000 -translate-x-10 group-hover:translate-x-0 group-hover:translate-y-[20px] rotate-[12deg] group-hover:rotate-[8deg] scale-90 group-hover:scale-100 hidden sm:block">
                                            <Phone src={project.screens[1]} />
                                        </div>
                                        <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Info Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-20"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase rounded-full">
                                            Project Details
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {selectedProject.longDescription}
                                    </p>
                                    
                                    <div className="space-y-4 mb-10">
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Key Features</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedProject.features.map(feature => (
                                                <div key={feature} className="flex items-center gap-2 text-slate-700 font-medium">
                                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                        <FaCheck className="text-green-600" size={10} />
                                                    </div>
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button 
                                            onClick={() => window.open(selectedProject.installUrl, '_blank')}
                                            className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
                                        >
                                            <FaDownload size={18} />
                                            Install App
                                        </button>
                                        <div className="flex flex-wrap gap-2 flex-grow-0">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag.name} className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 text-slate-500 text-xs font-bold rounded-xl border border-slate-100">
                                                    <tag.icon style={{ color: tag.color }} size={12} />
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MobileProjects;
