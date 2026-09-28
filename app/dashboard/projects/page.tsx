import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { ProjectSearch } from '@/components/ProjectSearch';
import { Pagination } from '@/components/Pagination';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';

export default async function DashboardProjects(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const [fetchedProjects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <div>
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          Dashboard // Manage Projects
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Manage Projects
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          Create, edit, and delete the projects shown on the public portfolio.
        </p>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start mb-6">
        <div className="flex-1">
          <ProjectSearch />
        </div>
        <Link
          href="/dashboard/projects/new"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors sm:mt-0"
        >
          New Project
        </Link>
      </div>

      <hr className="border-zinc-800 mb-10" />

      <section className="mb-12">
        {fetchedProjects.length === 0 ? (
          <p className="text-zinc-500 font-mono py-8">No projects found matching your search term.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {fetchedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showActions />
            ))}
          </div>
        )}
      </section>

      <Pagination totalPages={totalPages} />
    </div>
  );
}
