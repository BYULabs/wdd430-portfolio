import { notFound } from 'next/navigation';
import { updateProject } from '@/app/lib/actions';
import { getProjectById } from '@/lib/projects-db';
import ProjectForm from '@/components/ProjectForm';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    notFound();
  }

  const project = await getProjectById(numericId);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          // Portfolio // Edit Project
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Edit Project
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          Update this project&apos;s details. Changes are validated, then the projects list is refreshed.
        </p>
      </section>

      <hr className="border-zinc-800 mb-10" />

      <ProjectForm
        action={updateProject.bind(null, id)}
        project={project}
        submitLabel="Update Project"
      />
    </div>
  );
}
