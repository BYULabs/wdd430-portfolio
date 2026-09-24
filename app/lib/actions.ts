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

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies)
      VALUES (${title}, ${description}, ${type}, string_to_array(${technologiesValue}, ','))
    `;
  } catch (error) {
    console.error('Error creating project:', error);
    throw new Error('Failed to create project. Please try again later.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
  const { title, description, type, technologies } = parseProjectForm(formData);

  const technologiesValue = technologies.join(',');

  try {
    await sql`
      UPDATE projects
      SET
        title = ${title},
        description = ${description},
        type = ${type},
        technologies = string_to_array(${technologiesValue}, ',')
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Error updating project:', error);
    throw new Error('Failed to update project. Please try again later.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project. Please try again later.');
  }

  revalidatePath('/projects');
  redirect('/projects');
}
