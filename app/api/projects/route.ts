import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  // Await the async getProjects query
  const filteredProjects = await getProjects(type);

  return NextResponse.json(filteredProjects, { status: 200 });
}