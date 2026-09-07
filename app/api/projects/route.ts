import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  // getProjects handles returning all projects if type is null/undefined
  const filteredProjects = getProjects(type);

  return NextResponse.json(filteredProjects, { status: 200 });
}