import React from 'react'
import { motion } from 'framer-motion'
import { 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiPostgresql, 
    SiFirebase, 
    SiAmazondynamodb,
    SiPostman
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import profileImg from '../../images/profile.jpeg'

const Hero = () => {
    const skills = [
        { name: 'React', icon: SiReact, color: '#61DAFB', url: 'https://react.dev' },
        { name: 'React Native', icon: SiReact, color: '#61DAFB', url: 'https://reactnative.dev' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', url: 'https://nodejs.org' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', url: 'https://www.mongodb.com/docs/' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', url: 'https://www.postgresql.org/docs/' },
        { name: 'REST APIs', icon: SiPostman, color: '#FF6C37', url: 'https://learning.postman.com/' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', url: 'https://firebase.google.com/docs' },
        { name: 'DynamoDB/AWS', icon: SiAmazondynamodb, color: '#4053D6', url: 'https://docs.aws.amazon.com/dynamodb/' }
    ];

    return (
        <section id="home" className="min-h-[70vh] flex items-center relative overflow-hidden mb-24">
            <div className="max-w-4xl flex flex-col md:flex-row items-center gap-12">
                {/* Profile Photo for Mobile (Visible on Mobile Only) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:hidden w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl skew-y-3"
                >
                    <img src={profileImg} alt="Chetan Bhagat" className="w-full h-full object-cover" />
                </motion.div>

                <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl font-medium mb-2 text-slate-900"
                    >
                        Chetan Bhagat
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col mb-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
                            Full Stack Developer
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight">
                            Cross-Platform App Developer
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl"
                    >
                        I build end-to-end digital products — from polished mobile apps to scalable web systems. 
                        Whether it's a React frontend, a Node.js API, or a Flutter app, 
                        I care about clean architecture and experiences that feel alive.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-wrap gap-3 mb-10"
                    >
                        {skills.map((skill, index) => (
                            <motion.a
                                key={skill.name}
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, backgroundColor: '#f8fafc', borderColor: skill.color }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 transition-all hover:text-slate-900 shadow-sm hover:shadow-md"
                            >
                                <skill.icon style={{ color: skill.color }} size={16} />
                                {skill.name}
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500"
                    >
                        <span>Follow my process and updates on <a href="https://github.com/chetan12bhagat" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 hover:text-slate-600 transition-colors font-medium">GitHub</a> and <a href="https://www.threads.net/@ch_etan012" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 hover:text-slate-600 transition-colors font-medium">Threads</a></span>
                    </motion.div>
                </div>

                {/* Profile Photo for Desktop */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden md:block w-72 h-72 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                    <img src={profileImg} alt="Chetan Bhagat" className="w-full h-full object-cover" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
