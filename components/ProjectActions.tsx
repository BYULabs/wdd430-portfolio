import Link from 'next/link';
import { deleteProject } from '@/app/lib/actions';

export function EditButton({ id }: { id: number }) {
  return (
    <Link
      href={`/dashboard/projects/${id}/edit`}
      className="text-zinc-300 hover:text-white transition-colors"
    >
      Edit
    </Link>
  );
}

export function DeleteButton({ id }: { id: number }) {
  return (
    <form action={deleteProject.bind(null, String(id))}>
      <button
        type="submit"
        className="text-red-400 hover:text-red-300 transition-colors"
      >
        Delete
      </button>
    </form>
  );
}
