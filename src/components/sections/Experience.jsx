import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBrain } from 'react-icons/fa';
import { 
    SiReact, 
    SiRedux, 
    SiPostman, 
    SiFigma, 
    SiOpenai
} from 'react-icons/si';
import tradexaLogo from '../../images/tradexa-logo.png';

const Experience = () => {
    const experiences = [
        {
            title: "React Native Developer Intern (AI Focused)",
            company: "Tradexa Private Limited",
            logo: tradexaLogo,
            period: "6 Months",
            location: "Remote / Nagpur",
            description: "Pioneered the integration of AI-driven features within React Native applications. Focused on enhancing user interaction through intelligent automated responses and data-driven insights.",
            skills: [
                { name: "React Native", icon: SiReact, color: "#61DAFB" },
                { name: "AI Integration", icon: SiOpenai, color: "#412991" },
                { name: "API Development", icon: SiPostman, color: "#FF6C37" }
            ],
            icon: FaBrain
        },
        {
            title: "React Native Developer Intern",
            company: "Techoxy Private Limited",
            period: "6 Months",
            location: "Remote",
            description: "Developed and maintained cross-platform mobile applications using React Native. Collaborated with the backend team to integrate RESTful APIs and optimized app performance for high-traffic scenarios.",
            skills: [
                { name: "React Native", icon: SiReact, color: "#61DAFB" },
                { name: "Redux", icon: SiRedux, color: "#764ABC" },
                { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
                { name: "UI/UX", icon: SiFigma, color: "#F24E1E" }
            ],
            icon: FaBriefcase
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-20 bg-white relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-black mb-20">
                    <span className="text-black/40">05.</span> Industry Experience
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20">
                                <exp.icon className="text-slate-900" size={14} />
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100 w-fit">
                                        <FaCalendarAlt size={10} />
                                        {exp.period}
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                                    <div className="flex items-center gap-2">
                                        {exp.logo && (
                                            <div className="w-6 h-6 rounded bg-white border border-slate-100 p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                            </div>
                                        )}
                                        <span className="font-bold text-slate-900">{exp.company}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 opacity-60">
                                        <FaMapMarkerAlt size={12} />
                                        {exp.location}
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span 
                                            key={i}
                                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-100 shadow-sm"
                                        >
                                            <skill.icon style={{ color: skill.color }} size={12} />
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
