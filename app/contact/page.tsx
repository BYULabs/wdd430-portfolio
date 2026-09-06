import { Mail, MapPin, Linkedin, GitHub } from 'react-feather';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-8">
      {/* Header Section */}
      <section className="mb-8">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          // Get In Touch // Contact
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Contact Me
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-zinc-300 leading-relaxed">
          Whether you have a question about my projects, want to collaborate on a full-stack web application, or just want to connect, feel free to reach out.
        </p>
      </section>

      <hr className="border-zinc-800 mb-10" />

      {/* Main Content Grid */}
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        {/* Contact Information & Links */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white mb-4">Direct Contact</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-400">Email</p>
                <a 
                  href="mailto:contact@itusebastian.com" 
                  className="text-sm font-medium text-zinc-200 hover:text-blue-400 transition-colors"
                >
                  contact@itusebastian.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-400">Location</p>
                <p className="text-sm font-medium text-zinc-200">
                  Provo, Utah (BYU)
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white pt-4 mb-4">Social Profiles</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://github.com/BYULabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-all"
            >
              <GitHub className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/itusebastian/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-all"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Quick Message Form Component */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="How can I help you?"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}