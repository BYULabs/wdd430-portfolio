import AboutCard from '@/components/AboutCard';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Header */}
      <section className="py-10 md:py-16">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          // About // Sebastián Iturralde
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Full-Stack Developer & CS Student
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          I’m currently pursuing Computer Science at BYU while building full-stack web applications. 
          My focus is on modern React architectures, Next.js Server Components, scalable databases, and clean code principles.
        </p>
      </section>

      <hr className="border-zinc-800 mb-12" />

      {/* Render Component */}
      <AboutCard />
    </div>
  );
}