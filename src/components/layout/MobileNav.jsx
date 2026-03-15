import React, { useState } from 'react';
import { playHapticClick } from '../../utils/haptics';

const MobileNav = ({ activeSection, onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'About' },
        { id: 'cv', label: 'CV' },
        { id: 'projects', label: 'Web Projects' },
        { id: 'mobile-projects', label: 'Mobile Apps' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Get in Touch' }
    ];

    const handleNavClick = (id) => {
        playHapticClick();
        onNavigate(id);
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden">
            <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-[100] px-6 flex items-center justify-between border-b border-slate-100">
                <span className="text-sm font-bold tracking-tighter text-black">CB.</span>
                <button 
                    onClick={() => {
                        playHapticClick();
                        setIsOpen(!isOpen);
                    }} 
                    className="p-2 text-slate-900 font-bold"
                >
                    {isOpen ? 'CLOSE' : 'MENU'}
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-white z-[90] flex flex-col pt-24 px-8 pb-12 overflow-y-auto">
                    <div className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`text-3xl font-bold text-left tracking-tight ${
                                    activeSection === item.id ? 'text-black' : 'text-slate-400'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
