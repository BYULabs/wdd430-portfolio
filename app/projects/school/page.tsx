import ProjectCard from '@/components/ProjectCard';
import { headers } from 'next/headers';

async function getSchoolProjects(): Promise<Project[]> {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const res = await fetch(`${protocol}://${host}/api/projects?type=school`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch school projects');
  return res.json();
}

export default async function SchoolProjects() {
  const schoolProjects = await getSchoolProjects();

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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}