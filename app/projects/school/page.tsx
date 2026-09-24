import { Suspense } from 'react';
import { Project } from '@/lib/projects-db';
import ProjectCard from '@/components/ProjectCard';
import { headers } from 'next/headers';

// Dedicated Async Data-Fetching Component
async function SchoolProjectList() {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'; 

  // OPTIONAL: Add a temporary 3-second artificial delay to test the streaming behavior
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`${protocol}://${host}/api/projects?type=school`, { 
    cache: 'no-store', 
  });

  if (!res.ok) throw new Error('Failed to fetch school projects'); 
  const schoolProjects: Project[] = await res.json(); 

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {schoolProjects.map((project) => (
        <ProjectCard key={project.id} project={project} /> 
      ))}
    </div>
  );
}

// Skeleton Fallback Component
function SchoolProjectSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-64 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
        >
          <div className="h-6 w-1/3 bg-zinc-800 rounded mb-4" />
          <div className="h-4 w-full bg-zinc-800 rounded mb-2" />
          <div className="h-4 w-2/3 bg-zinc-800 rounded mb-6" />
          <div className="flex gap-2 mt-auto">
            <div className="h-6 w-16 bg-zinc-800 rounded-full" />
            <div className="h-6 w-16 bg-zinc-800 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Synchronous Shell Page
export default function SchoolProjects() {
  return (
    <div>
      {/* Header renders instantly */}
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          Portfolio // BYU Coursework & Labs
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          School Projects
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          Course labs, academic assignments, and computer science coursework built during my studies at BYU.
        </p>
      </section>

      <hr className="border-zinc-800 mb-10" />

      {/* Grid Section streams in via Suspense */}
      <section className="mb-12">
        <Suspense fallback={<SchoolProjectSkeleton />}>
          <SchoolProjectList />
        </Suspense>
      </section>
    </div>
  );
}