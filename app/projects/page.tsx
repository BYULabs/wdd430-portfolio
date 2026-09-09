import { Project } from '@/lib/projects-db';
import ProjectCard from '@/components/ProjectCard';
import { headers } from 'next/headers';

async function getProjects(): Promise<Project[]> {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  
  const res = await fetch(`${protocol}://${host}/api/projects`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default async function Projects() {
  const fetchedProjects = await getProjects();

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
          {fetchedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}