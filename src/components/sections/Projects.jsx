import React from 'react'
import ProjectShowcase from '../Projects/ProjectShowcase'
import AniproProject from '../Projects/AniproProject'
import SpotlightProject from '../Projects/SpotlightProject'
import MicroGigProject from '../Projects/MicroGigProject'

const Projects = () => {
    const compactProjects = [
        { title: "Kisan Saathi", url: "#" }
    ];

    return (
        <section id="projects" className="py-20 px-6 md:px-20 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4 text-slate-900">
                        <span className="text-accent">03.</span> Projects
                    </h2>
                    <p className="text-slate-500">Some of my recent engineering work.</p>
                </div>

                <div className="space-y-4">
                    {/* Row 1: Anipro (01) */}
                    <AniproProject />

                    {/* Row 2: Spotlight (02) + Fraud Guard (05) */}
                    <SpotlightProject />

                    {/* Row 3: Micro-Gig (03) + PayrollPro (04) */}
                    <MicroGigProject />

                    {/* Compact Multiple-Project List */}
                    <div className="mt-8 space-y-2 max-w-xs relative z-[250]">
                        {compactProjects.map((project) => (
                            <a
                                key={project.title}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50 active:bg-slate-100 transition border border-transparent hover:border-slate-200 cursor-pointer group"
                            >
                                <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{project.title}</span>
                                <span className="opacity-50 text-accent font-bold group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Projects


