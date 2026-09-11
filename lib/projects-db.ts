import { sql } from '@vercel/postgres';

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

// Database row interface matching PostgreSQL column names
interface ProjectRow {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school' | 'personal';
  technologies: string[];
  link?: string;
  github_url?: string;
  featured?: boolean;
  live_url?: string;
}

// Helper to format database row into TypeScript interface format
function mapProjectRow(row: ProjectRow): Project {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    type: row.type,
    technologies: row.technologies,
    link: row.link ?? undefined,
    githubUrl: row.github_url ?? undefined,
    featured: row.featured ?? false,
    liveUrl: row.live_url ?? undefined,
  };
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<ProjectRow>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows.map(mapProjectRow);
  }

  const { rows } = await sql<ProjectRow>`SELECT * FROM projects ORDER BY id`;
  return rows.map(mapProjectRow);
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<ProjectRow>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  
  if (!rows[0]) return null;
  return mapProjectRow(rows[0]);
}