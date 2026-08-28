import Link from 'next/link';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
              Featured
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
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
        </div>
      </div>
    </article>
  );
}