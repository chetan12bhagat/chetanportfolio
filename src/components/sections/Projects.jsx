import React from 'react';
import { motion } from 'framer-motion';
import aniproImg from '../../images/anipro.live.png';
import spotlightImg from '../../images/spotlight.png';
import microGigImg from '../../images/microgigs.png';
import payrollProImg from '../../images/payrollpro.png';
import fraudGuardImg from '../../images/FraudGuard.png';
import infinityVideo from '../../video/Infinity AI.MOV';

const Projects = () => {
    const projects = [
        { 
            id: 'infinity-ai',
            title: "Infinity AI", 
            description: "AI-powered creative dashboard & tools",
            video: infinityVideo,
            url: "https://infinity-ai-v1.vercel.app/",
            type: "Web"
        },
        { 
            id: 'anipro',
            title: "Anipro", 
            description: "Anime streaming experience with fluid UI",
            image: aniproImg,
            url: "https://anipro.live/demon-slayer",
            type: "Web"
        },
        { 
            id: 'spotlight',
            title: "Spotlight", 
            description: "Movie booking & trailer platform",
            image: spotlightImg,
            url: "https://spotlight.app",
            type: "Web"
        },
        { 
            id: 'micro-gig',
            title: "Micro-Gig", 
            description: "Student micro-project marketplace",
            image: microGigImg,
            url: "https://micro-gig.vercel.app",
            type: "Web"
        },
        { 
            id: 'payrollpro',
            title: "PayrollPro", 
            description: "Full-stack payroll management system",
            image: payrollProImg,
            url: "#",
            type: "Web"
        },
        { 
            id: 'fraud-guard',
            title: "Fraud Guard", 
            description: "AI-powered fraud detection system",
            image: fraudGuardImg,
            url: "#",
            type: "Web"
        }
    ];

    return (
        <section id="projects" className="max-w-6xl mx-auto py-24 px-6 md:px-20 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-black mb-20">
                <span className="text-black/40">01.</span> Web Projects
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[220px]">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 transition-all duration-300 shadow-sm hover:shadow-xl"
                    >
                        {project.video ? (
                            <div className="absolute inset-0 w-full h-full">
                                <video 
                                    src={project.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                        ) : project.image ? (
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                        ) : null}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 group-hover:text-black drop-shadow-sm">{project.title}</h3>
                                <p className="text-[10px] text-slate-600 font-medium group-hover:text-slate-900 drop-shadow-sm line-clamp-1">{project.description}</p>
                            </div>
                            <span className="text-xs font-mono text-slate-400 group-hover:text-black transition-colors">↗</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}


export default Projects


