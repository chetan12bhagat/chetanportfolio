import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import profileImg from '../../images/profile.jpeg';
import { playHapticClick } from '../../utils/haptics';

const Sidebar = ({ activeSection, onNavigate }) => {
    const navGroups = [
        {
            title: null,
            items: [
                { id: 'home', label: 'About' },
                { id: 'cv', label: 'CV' },
            ]
        },
        {
            title: 'PORTFOLIO',
            items: [
                { id: 'projects', label: 'Web Projects' },
                { id: 'mobile-projects', label: 'Mobile Apps' },
                { id: 'achievements', label: 'Achievements' },
            ]
        },
        {
            title: 'CONTACT',
            items: [
                { id: 'contact', label: 'Get in Touch' },
                { id: 'github', label: 'GitHub', isExternal: true, url: 'https://github.com/chetan12bhagat' },
                { id: 'linkedin', label: 'LinkedIn', isExternal: true, url: 'https://www.linkedin.com/in/chetansb22/' },
                { id: 'instagram', label: 'Instagram', isExternal: true, url: 'https://www.instagram.com/ch_etan012/' },
                { id: 'experience', label: 'Experience' },
            ]
        }
    ];

    const handleNavClick = (id, isExternal, url) => {
        playHapticClick();
        if (isExternal) {
            window.open(url, '_blank');
        } else {
            onNavigate(id);
        }
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 p-8 flex flex-col hidden lg:flex bg-white z-50 border-r border-slate-100">
            {/* Profile Section */}
            <div className="mb-12 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shadow-sm">
                    <img 
                        src={profileImg} 
                        alt="Chetan Bhagat" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-[13px] font-bold tracking-tight text-slate-900">
                        Chetan Bhagat
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium tracking-tight uppercase">
                        Full Stack Developer
                    </span>
                </div>
            </div>

            <nav className="flex flex-col gap-10">
                {navGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="flex flex-col gap-4">
                        {group.title && (
                            <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                                {group.title}
                            </h3>
                        )}
                        <ul className="flex flex-col gap-2">
                            {group.items.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleNavClick(item.id, item.isExternal, item.url)}
                                        className={`text-left text-[13px] transition-all duration-300 relative flex items-center group ${
                                            activeSection === item.id 
                                            ? 'text-black font-medium' 
                                            : 'text-slate-500 hover:text-black'
                                        }`}
                                    >
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            {item.label}
                                        </span>
                                        {activeSection === item.id && !item.isExternal && (
                                            <motion.div
                                                layoutId="active-indicator"
                                                className="absolute -left-4 w-1 h-1 rounded-full bg-black"
                                            />
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-slate-50">
                <p className="text-[10px] text-slate-400 font-mono tracking-tight">
                    © 2025 CHETAN BHAGAT
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
