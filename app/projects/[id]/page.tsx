import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects-db';

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    notFound();
  }

  const project = await getProjectById(numericId);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          Portfolio // {project.type}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          {project.title}
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          {project.description}
        </p>
      </section>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs font-mono text-zinc-300 border border-zinc-700/50"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors"
          >
            GitHub →
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Live Demo ↗
          </Link>
        )}
        <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
          ← All Projects
        </Link>
      </div>
    </article>
  );
}
