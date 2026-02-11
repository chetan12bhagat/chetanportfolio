export default function ProjectCard({ project }) {
    return (
        <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-slate-200 hover:border-accent/30 bg-white shadow-sm hover:shadow-md"
        >
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop' // Fallback image
                    }}
                />
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                </h3>
                {project.description && (
                    <p className="mt-2 text-slate-500 text-sm line-clamp-2">
                        {project.description}
                    </p>
                )}
            </div>
        </a>

    );
}

