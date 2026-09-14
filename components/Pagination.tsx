'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-8 border-t border-zinc-800 pt-6">
      <Link
        href={createPageURL(currentPage - 1)}
        className={`px-4 py-2 text-sm font-medium border border-zinc-800 rounded-md transition-colors ${
          currentPage <= 1
            ? 'pointer-events-none opacity-40 text-zinc-600'
            : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
        }`}
      >
        Previous
      </Link>

      <span className="text-sm font-mono text-zinc-400">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        className={`px-4 py-2 text-sm font-medium border border-zinc-800 rounded-md transition-colors ${
          currentPage >= totalPages
            ? 'pointer-events-none opacity-40 text-zinc-600'
            : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
        }`}
      >
        Next
      </Link>
    </div>
  );
}