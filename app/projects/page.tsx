import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div>
      {/* Header Section */}
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          // Portfolio // Projects Overview
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          All Projects
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          A collection of full-stack web applications, course labs, and open-source experiments built with modern Web technologies.
        </p>
      </section>

      <hr className="border-zinc-800 mb-10" />

      {/* Projects Grid Section */}
      <section className="mb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}