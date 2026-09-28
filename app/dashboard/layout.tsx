import type { Metadata } from 'next';
import Link from 'next/link';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Dashboard | BYU Labs',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <section className="max-w-5xl mx-auto py-8">
      <nav className="flex flex-wrap items-center gap-6 border-b border-zinc-800 pb-4 mb-8">
        <Link
          href="/dashboard/projects"
          className="text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/dashboard/projects/new"
          className="text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors"
        >
          New Project
        </Link>
        <span className="ml-auto text-xs font-mono text-zinc-500">
          Signed in as {session?.user?.name ?? session?.user?.email}
        </span>
      </nav>

      {children}
    </section>
  );
}
