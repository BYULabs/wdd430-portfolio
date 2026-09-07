import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  const { id } = await params;
  const numericId = Number(id);

  // Return 400 if ID is not a valid number
  if (isNaN(numericId)) {
    return NextResponse.json(
      { error: 'Invalid project ID format. Must be a number.' },
      { status: 400 }
    );
  }

  const project = getProjectById(numericId);

  // Return 404 if no project exists with that ID
  if (!project) {
    return NextResponse.json(
      { error: `Project with ID ${numericId} not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json(project, { status: 200 });
}