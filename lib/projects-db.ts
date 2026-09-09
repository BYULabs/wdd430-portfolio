export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school' | 'personal';
  technologies: string[];
  link?: string;
  githubUrl?: string;
  featured?: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Cuarenta JS",
    description: "A realistic web implementation of the traditional Ecuadorian card game Cuarenta, built with full rule logic and interactive AI opponents.",
    type: "opensource",
    technologies: ["JavaScript", "HTML5 Canvas/DOM", "CSS3", "Game Logic"],
    link: "https://cuarenta.itusebastian.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Relato Corto",
    description: "A fiction storytelling blog and SEO testing sandbox currently driving over 20k impressions per month through search optimization strategies.",
    type: "personal",
    technologies: ["SEO", "Web Performance", "Content Strategy", "Analytics"],
    link: "https://relatocorto.com/",
    featured: true,
  },
  {
    id: 3,
    title: "CougarHype",
    description: "BYU Football analytics and statistics sandbox platform providing game insights and performance visualization.",
    type: "school",
    technologies: ["Node.js", "Express", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/BYULabs/cougarhype",
    link: "https://cougarhype.onrender.com/",
    featured: true,
  },
  {
    id: 4,
    title: "CSE 340: ServiceNetwork",
    description: "Full-stack web application developed for CSE 340 featuring MVC architecture, authentication, and database integration.",
    type: "school",
    technologies: ["Node.js", "Express", "PostgreSQL", "MVC"],
    githubUrl: "https://github.com/BYULabs/cse340",
    link: "https://cse340-p8my.onrender.com/",
  },
  {
    id: 5,
    title: "WDD 330: SleepOutside",
    description: "Frontend web application built for WDD 330 focusing on dynamic product rendering, cart management, and API integration.",
    type: "school",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    githubUrl: "https://github.com/BYULabs/wdd330",
    link: "https://wdd330-y0zq.onrender.com/",
  },
  {
    id: 6,
    title: "Fabrication Unit",
    description: "Web development showcase and sandbox hosted on GitHub Pages for testing components and micro-features.",
    type: "opensource",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    githubUrl: "https://github.com/BYULabs/fabrication-unit",
    link: "https://byulabs.github.io/fabrication-unit/",
  },
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter(p => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find(p => p.id === id) ?? null;
}