import React from 'react';
import spotlightImg from '../../images/spotlight.png';
import fraudGuardImg from '../../images/fraudguard.png';

export default function SpotlightProject() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-12">
            {/* LEFT SIDE — SPOTLIGHT PROJECT */}
            <div className="flex flex-col w-full max-w-xs">
                <a
                    href="https://spotlight.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group block relative rounded-lg overflow-hidden transition-all duration-500 border border-slate-200 hover:border-accent/30 bg-white shadow-sm"
                >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <span className="absolute top-3 left-3 z-10 text-[10px] font-bold tracking-widest text-slate-900/70 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded shadow-sm border border-slate-200/50">
                            02
                        </span>
                        <img
                            src={spotlightImg}
                            alt="Spotlight Project"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                    </div>
                </a>
                <p className="mt-1 text-[10px] text-slate-500 truncate">
                    Spotlight — Movie booking & trailer app
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 relative z-[250]">
                    <a
                        href="https://spotlight.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold
                                border border-slate-900 bg-slate-900 text-white hover:bg-slate-800
                                active:scale-95 transition-all shadow-md cursor-pointer"
                    >
                        Live Demo
                        <span className="opacity-60">↗</span>
                    </a>
                    <a
                        href="https://github.com/chetan12bhagat/spotlight"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                                border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100
                                active:scale-95 transition-all cursor-pointer"
                    >
                        GitHub
                        <span className="opacity-60 text-accent font-bold">↗</span>
                    </a>
                </div>
            </div>

            {/* RIGHT SIDE — FRAUD GUARD PROJECT */}
            <div className="flex flex-col w-full max-w-xs">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group block relative rounded-lg overflow-hidden transition-all duration-500 border border-slate-200 hover:border-accent/30 bg-white shadow-sm"
                >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <span className="absolute top-3 left-3 z-10 text-[10px] font-bold tracking-widest text-slate-900/70 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded shadow-sm border border-slate-200/50">
                            05
                        </span>
                        <img
                            src={fraudGuardImg}
                            alt="Fraud Guard Project"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                    </div>
                </a>
                <p className="mt-1 text-[10px] text-slate-500 truncate">
                    Fraud Guard — Fraud detection system
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 relative z-[250]">
                    <a
                        href="#"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold
                                border border-slate-900 bg-slate-900 text-white hover:bg-slate-800
                                active:scale-95 transition-all shadow-md cursor-pointer"
                    >
                        Live Demo
                        <span className="opacity-60">↗</span>
                    </a>
                    <a
                        href="https://github.com/chetan12bhagat/fraud-guard"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                                border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100
                                active:scale-95 transition-all cursor-pointer"
                    >
                        GitHub
                        <span className="opacity-60 text-accent font-bold">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
