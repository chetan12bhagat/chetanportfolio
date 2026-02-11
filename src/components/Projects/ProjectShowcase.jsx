import ProjectCard from "./ProjectCard";
import ProjectVideo from "./ProjectVideo";


export default function ProjectShowcase({ project }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-12">
            <div className="flex flex-col h-full">
                <ProjectCard project={project} />
            </div>
            <div className="hidden md:flex h-full">
                <ProjectVideo video={project.video} />
            </div>
        </section>
    );
}
