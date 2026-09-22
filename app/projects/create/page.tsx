import { createProject } from '@/app/lib/actions';
import ProjectForm from '@/components/ProjectForm';

export default function Page() {
  return (
    <div>
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          // Portfolio // New Project
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Create Project
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          Add a new project to the portfolio. Title, description, and technologies are validated before they are saved.
        </p>
      </section>

      <hr className="border-zinc-800 mb-10" />

      <ProjectForm action={createProject} submitLabel="Save Project" />
    </div>
  );
}
