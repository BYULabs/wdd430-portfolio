'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  technologies: z.string().min(2),
});

const CreateProjectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(20, 'Description must be at least 20 characters.'),
  technologies: z.string().min(2, 'Add at least one technology.'),
  yearCompleted: z.coerce
    .number()
    .int('Year must be a whole number.')
    .gte(2000, 'Year must be 2000 or later.')
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
  type: z.enum(['personal', 'school', 'opensource'], {
    message: 'Choose a project type.',
  }),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
    type?: string[];
  };
  message?: string | null;
};

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

export async function createProject(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = CreateProjectSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    yearCompleted: formData.get('yearCompleted'),
    type: formData.get('type'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create project.',
    };
  }

  const { title, description, technologies, yearCompleted, type } = validatedFields.data;
  const technologiesValue = technologies
    .split(',')
    .map((tech) => tech.trim())
    .filter(Boolean)
    .join(',');

  try {
    await sql`
      INSERT INTO projects (title, description, type, technologies, year_completed)
      VALUES (
        ${title},
        ${description},
        ${type},
        string_to_array(${technologiesValue}, ','),
        ${yearCompleted}
      )
    `;
  } catch (error) {
    console.error('Error creating project:', error);
    return {
      message: 'Database Error: Failed to create project.',
    };
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
