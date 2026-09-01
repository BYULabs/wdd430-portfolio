import Link from 'next/link';
import { User, Globe, Code, ExternalLink } from 'react-feather';

interface AboutCardProps {
  title?: string;
  bioParagraphs?: string[];
  studioUrl?: string;
  sandboxUrl?: string;
  skills?: {
    frontend: string[];
    backend: string[];
    engineering: string[];
  };
}

export default function AboutCard({
  title = "Background & Focus",
  bioParagraphs = [
    "Passionate about software architecture, Object-Oriented Programming (OOP), and modern web frameworks. Whether working with React, C#, or Python, I enjoy turning complex software requirements into clean, performant interfaces.",
    "When I’m not coding for coursework or side projects, I’m exploring micro-frontend patterns, system design, and API integrations."
  ],
  studioUrl = "https://www.itusebastian.com/",
  sandboxUrl = "https://byulabs.github.io",
  skills = {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    engineering: ["C# / SOLID", "Java / OOP", "Python"],
  },
}: AboutCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/* Left Column: Background & Experience */}
      <div className="md:col-span-2 space-y-8">
        <section className="repo-card p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-500" />
            {title}
          </h2>
          {bioParagraphs.map((paragraph, idx) => (
            <p key={idx} className="text-zinc-300 text-sm leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Connected Sandboxes Section */}
        <section className="repo-card p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" />
            Live Environments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link
              href={studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:border-blue-500/40 transition-colors group"
            >
              <span className="text-zinc-300 group-hover:text-white font-medium">Personal Studio</span>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blue-400" />
            </Link>
            <Link
              href={sandboxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:border-blue-500/40 transition-colors group"
            >
              <span className="text-zinc-300 group-hover:text-white font-medium">BYU Labs Sandbox</span>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blue-400" />
            </Link>
          </div>
        </section>
      </div>

      {/* Right Column: Skill Stack Pills */}
      <div className="space-y-6">
        <section className="repo-card p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-500" />
            Technologies
          </h2>
          
          <div className="space-y-4">
            <div>
              <span className="text-xs text-zinc-500 font-mono block mb-2">Frontend</span>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="comp-pill text-xs px-3 py-1.5 rounded-md border border-zinc-700/60 bg-zinc-800/50 text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs text-zinc-500 font-mono block mb-2">Backend & Databases</span>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="comp-pill text-xs px-3 py-1.5 rounded-md border border-zinc-700/60 bg-zinc-800/50 text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs text-zinc-500 font-mono block mb-2">Software Engineering</span>
              <div className="flex flex-wrap gap-2">
                {skills.engineering.map((skill) => (
                  <span key={skill} className="comp-pill text-xs px-3 py-1.5 rounded-md border border-zinc-700/60 bg-zinc-800/50 text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}