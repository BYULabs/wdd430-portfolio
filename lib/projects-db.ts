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

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchPattern = `%${query}%`;

  const { rows } = await sql<ProjectRow>`
    SELECT * FROM projects
    WHERE title ILIKE ${searchPattern} 
       OR description ILIKE ${searchPattern}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  return rows.map(mapProjectRow);
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const searchPattern = `%${query}%`;

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) FROM projects
    WHERE title ILIKE ${searchPattern} 
       OR description ILIKE ${searchPattern}
  `;

  const totalCount = Number(rows[0].count);
  return Math.ceil(totalCount / ITEMS_PER_PAGE);
}