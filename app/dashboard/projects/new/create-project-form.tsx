'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/app/lib/actions';

const initialState: State = { message: null, errors: {} };

const inputClassName =
  'block w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-blue-500 transition-colors focus:ring-2';

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(createProject, initialState);

  return (
    <form
      action={formAction}
      className="max-w-xl space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm"
    >
      <div>
        <label htmlFor="title" className="mb-2 block text-xs font-mono text-zinc-400">
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Project title"
          className={inputClassName}
          aria-describedby="title-error"
          aria-invalid={Boolean(state.errors?.title)}
          required
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-xs font-mono text-zinc-400">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="What does this project do?"
          className={`${inputClassName} resize-none`}
          aria-describedby="description-error"
          aria-invalid={Boolean(state.errors?.description)}
          required
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="mb-2 block text-xs font-mono text-zinc-400">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className={inputClassName}
          aria-describedby="technologies-error"
          aria-invalid={Boolean(state.errors?.technologies)}
          required
        />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="yearCompleted" className="mb-2 block text-xs font-mono text-zinc-400">
          Year Completed
        </label>
        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          min="2000"
          max="2099"
          placeholder="2026"
          className={inputClassName}
          aria-describedby="yearCompleted-error"
          aria-invalid={Boolean(state.errors?.yearCompleted)}
          required
        />
        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
          {state.errors?.yearCompleted?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="type" className="mb-2 block text-xs font-mono text-zinc-400">
          Type
        </label>
        <select
          id="type"
          name="type"
          defaultValue="personal"
          className={inputClassName}
          aria-describedby="type-error"
          aria-invalid={Boolean(state.errors?.type)}
          required
        >
          <option value="personal">Personal</option>
          <option value="school">School</option>
          <option value="opensource">Open Source</option>
        </select>
        <div id="type-error" aria-live="polite" aria-atomic="true">
          {state.errors?.type?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-400">
              {error}
            </p>
          ))}
        </div>
      </div>

      {state.message ? <p className="text-sm text-red-400">{state.message}</p> : null}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Saving...' : 'Save Project'}
      </button>
    </form>
  );
}
