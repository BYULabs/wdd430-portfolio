'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ProjectFormSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  technologies: z.string().min(2),
});

function parseTechnologies(value: string): string[] {
  return value
    .split(',')
    .map((tech) => tech.trim())
    .filter(Boolean);
}

function parseProjectForm(formData: FormData) {
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error('Invalid project input.');
  }

  const { title, description, technologies } = parsed.data;
  const typeValue = formData.get('type');
  const type =
    typeValue === 'opensource' || typeValue === 'school' || typeValue === 'personal'
      ? typeValue
      : 'personal';

  return {
    title,
    description,
    type,
    technologies: parseTechnologies(technologies),
  };
}

export async function createProject(formData: FormData) {
  const { title, description, type, technologies } = parseProjectForm(formData);

  const technologiesValue = technologies.join(',');

  await sql`
    INSERT INTO projects (title, description, type, technologies)
    VALUES (${title}, ${description}, ${type}, string_to_array(${technologiesValue}, ','))
  `;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
  const { title, description, type, technologies } = parseProjectForm(formData);

  const technologiesValue = technologies.join(',');

  await sql`
    UPDATE projects
    SET
      title = ${title},
      description = ${description},
      type = ${type},
      technologies = string_to_array(${technologiesValue}, ',')
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: string) {
  await sql`DELETE FROM projects WHERE id = ${id}`;
  revalidatePath('/projects');
}
