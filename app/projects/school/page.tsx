import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function SchoolProjects() {
  const schoolProjects = projects.filter(
    (project) => project.category === 'school'
  );

  return (
    <div>
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          // Portfolio // BYU Coursework & Labs
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          School Projects
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          Course labs, academic assignments, and computer science coursework built during my studies at BYU.
        </p>
      </section>

      <hr className="border-zinc-800 mb-10" />

      <section className="mb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {schoolProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}