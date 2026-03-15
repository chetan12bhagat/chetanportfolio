import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaThreads, FaInstagram, FaBars, FaTimes } from 'react-icons/fa6';

const MobileNav = ({ activeSection, onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const audioContextRef = useRef(null);

    const playHapticClick = () => {
        try {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = audioContextRef.current;
            if (ctx.state === 'suspended') ctx.resume();

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } catch (e) {
            console.warn('Audio feedback failed', e);
        }
    };

    const navItems = [
        { id: 'home', label: 'About' },
        { id: 'cv', label: 'CV' },
        { id: 'projects', label: 'Web Projects' },
        { id: 'mobile-projects', label: 'Mobile Apps' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Get in Touch' }
    ];

    const socials = [
        { icon: FaGithub, url: 'https://github.com/chetan12bhagat' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/chetansb22/' },
        { icon: FaThreads, url: 'https://www.threads.net/@ch_etan012' },
        { icon: FaInstagram, url: 'https://www.instagram.com/ch_etan012/' }
    ];

    const handleNavClick = (id) => {
        playHapticClick();
        onNavigate(id);
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden">
            {/* Header Bar */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-[100] px-6 flex items-center justify-between border-b border-slate-100">
                <span className="text-sm font-bold tracking-tighter text-black">CB.</span>
                <button 
                    onClick={() => { playHapticClick(); setIsOpen(!isOpen); }}
                    className="p-2 text-slate-900"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[90] flex flex-col pt-24 px-8 pb-12"
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`text-3xl font-bold text-left tracking-tight ${
                                        activeSection === item.id ? 'text-black' : 'text-slate-400'
                                    }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-8">
                            <div className="flex gap-6">
                                {socials.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + index * 0.05 }}
                                        className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100"
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                            <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                                © 2025 CHETAN BHAGAT
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;
