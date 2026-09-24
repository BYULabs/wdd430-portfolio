import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto mt-16 max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
      <p className="mt-3 text-zinc-300">
        The project you are looking for does not exist.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/projects"
          className="rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
