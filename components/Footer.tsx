import Link from 'next/link';
import { Smile } from 'react-feather';

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-zinc-800/80 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright Tag line */}
        <div className="text-xs text-zinc-300 flex items-center gap-1 font-mono">
          <span>© {new Date().getFullYear()} BYU // LABS · Go Cougs!</span>
          <Smile className="w-3.5 h-3.5 inline-block text-blue-400" />
        </div>

        {/* Dynamic Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-300">
          <Link
            href="https://byucougars.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            <span className="hidden md:inline">BYU Athletics</span>
            <span className="inline md:hidden">Athletics</span>
          </Link>
          <span className="text-zinc-700">·</span>
          <Link
            href="https://companion.byupathway.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            <span className="hidden md:inline">Pathway Companion</span>
            <span className="inline md:hidden">Companion</span>
          </Link>
          <span className="text-zinc-700">·</span>
          <Link
            href="https://byupw.instructure.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            <span className="hidden md:inline">Canvas Courses</span>
            <span className="inline md:hidden">Canvas</span>
          </Link>
          <span className="text-zinc-700">·</span>
          <Link
            href="https://portal.byupathway.edu/CMCPortal/secure/student/stuportal.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            <span className="hidden md:inline">Student Portal</span>
            <span className="inline md:hidden">Portal</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}