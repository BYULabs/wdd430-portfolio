export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Cuarenta JS",
    description: "A realistic web implementation of the traditional Ecuadorian card game Cuarenta, built with full rule logic and interactive AI opponents.",
    technologies: ["JavaScript", "HTML5 Canvas/DOM", "CSS3", "Game Logic"],
    liveUrl: "https://cuarenta.itusebastian.com/",
    featured: true,
  },
  {
    title: "Relato Corto",
    description: "A fiction storytelling blog and SEO testing sandbox currently driving over 20k impressions per month through search optimization strategies.",
    technologies: ["SEO", "Web Performance", "Content Strategy", "Analytics"],
    liveUrl: "https://relatocorto.com/",
    featured: true,
  },
  {
    title: "CougarHype",
    description: "BYU Football analytics and statistics sandbox platform providing game insights and performance visualization.",
    technologies: ["Node.js", "Express", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/BYULabs/cougarhype",
    liveUrl: "https://cougarhype.onrender.com/",
    featured: true,
  },
  {
    title: "CSE 340: ServiceNetwork",
    description: "Full-stack web application developed for CSE 340 featuring MVC architecture, authentication, and database integration.",
    technologies: ["Node.js", "Express", "PostgreSQL", "MVC"],
    githubUrl: "https://github.com/BYULabs/cse340",
    liveUrl: "https://cse340-p8my.onrender.com/",
  },
  {
    title: "WDD 330: SleepOutside",
    description: "Frontend web application built for WDD 330 focusing on dynamic product rendering, cart management, and API integration.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    githubUrl: "https://github.com/BYULabs/wdd330",
    liveUrl: "https://wdd330-y0zq.onrender.com/",
  },
  {
    title: "Fabrication Unit",
    description: "Web development showcase and sandbox hosted on GitHub Pages for testing components and micro-features.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    githubUrl: "https://github.com/BYULabs/fabrication-unit",
    liveUrl: "https://byulabs.github.io/fabrication-unit/",
  },
];