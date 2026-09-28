import Link from 'next/link';
import { GitHub, Linkedin } from 'react-feather';
import NavLinks from './NavLinks';
import { auth } from '@/auth';
import { SignOutButton } from './SignOutButton';

export default async function Header() {
  const session = await auth();

  return (
    <header className="container mx-auto px-4 py-5 md:py-6">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        
        {/* Brand Link */}
        <Link 
          href="/" 
          className="text-sm md:text-base tracking-wider font-semibold hover:opacity-80 transition-opacity"
          aria-label="BYU Labs Home"
        >
          <span className="text-blue-500 font-bold">BYU</span>
          <span className="text-zinc-500 font-normal"> \\ </span>
          <span className="text-zinc-300">LABS</span>
        </Link>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-6">
          {/* Main Navigation Links */}
          <NavLinks />

          <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

          {/* Owner Auth Controls */}
          {session?.user ? (
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard/projects"
                className="text-xs md:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <Link
              href="/login"
              className="text-xs md:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
          )}

          <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/BYULabs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="w-4 h-4 md:w-5 md:h-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/itusebastian/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-700/80 text-zinc-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}