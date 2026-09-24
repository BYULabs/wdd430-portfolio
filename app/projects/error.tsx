'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('An uncaught error occurred:', error);
  }, [error]);

  return (
    <div className="mx-auto mt-16 max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-white">Something went wrong!</h1>
      <p className="mt-3 text-zinc-300">
        An unexpected error occurred. Please try again later.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/projects"
          className="rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
        >
          Go Back to Projects
        </Link>
      </div>
    </div>
  );
}
