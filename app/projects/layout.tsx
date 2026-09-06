import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | BYU Labs",
  description: "Explore projects and manage section settings by Sebastián Iturralde.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-5xl mx-auto py-8">
      {/* Section-Specific Sub-Navigation */}
      <nav className="flex items-center gap-6 border-b border-zinc-800 pb-4 mb-8">
        <Link 
          href="/projects" 
          className="text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors"
        >
          All
        </Link>
        <Link 
          href="/projects/opensource" 
          className="text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors"
        >
          Open Source
        </Link>
        <Link 
          href="/projects/school" 
          className="text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors"
        >
          School
        </Link>
        <Link 
          href="/projects/settings" 
          className="text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors"
        >
          Settings
        </Link>
      </nav>

      {/* Render nested child pages */}
      {children}
    </section>
  );
}