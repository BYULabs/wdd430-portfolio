import { signOut } from '@/auth';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <button
        type="submit"
        className="text-xs md:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
      >
        Sign Out
      </button>
    </form>
  );
}
