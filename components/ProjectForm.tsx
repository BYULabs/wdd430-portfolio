import { Project } from '@/lib/projects-db';

const inputClassName =
  'w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors';

export default function ProjectForm({
  action,
  project,
  submitLabel,
}: {
  action: (formData: FormData) => void | Promise<void>;
  project?: Project;
  submitLabel: string;
}) {
  const technologiesValue = project?.technologies.join(', ') ?? '';

  return (
    <form
      action={action}
      className="max-w-xl space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm"
    >
      <div>
        <label htmlFor="title" className="block text-xs font-mono text-zinc-400 mb-2">
          Title
        </label>
        <input
          id="title"
          name="title"
          required
          minLength={2}
          defaultValue={project?.title}
          placeholder="Project title"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-xs font-mono text-zinc-400 mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          rows={4}
          defaultValue={project?.description}
          placeholder="What does this project do?"
          className={`${inputClassName} resize-none`}
        />
      </div>

      <div>
        <label htmlFor="technologies" className="block text-xs font-mono text-zinc-400 mb-2">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          required
          minLength={2}
          defaultValue={technologiesValue}
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-xs font-mono text-zinc-400 mb-2">
          Type
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue={project?.type ?? 'personal'}
          className={inputClassName}
        >
          <option value="personal">Personal</option>
          <option value="school">School</option>
          <option value="opensource">Open Source</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
}
