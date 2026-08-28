import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="py-10 md:py-16 mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-400 mb-6">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          Building with Next.js App Router
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Sebastián Iturralde
        </h1>
        <p className="max-w-xl text-base md:text-lg text-zinc-300 leading-relaxed">
          Full-Stack Developer crafting scalable web applications. Currently focusing on modern React patterns, Next.js Server Components, and Tailwind CSS ecosystem.
        </p>
      </section>

      <hr className="border-zinc-800 mb-10" />

      {/* Projects Grid Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-6 flex items-center gap-3">
          <span>Featured Projects</span>
          <span className="h-px flex-1 bg-zinc-800" />
        </h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}