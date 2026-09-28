'use client';

import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { authenticate } from '@/app/lib/actions';

const inputClassName =
  'block w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-blue-500 transition-colors focus:ring-2';

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard/projects';
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm"
    >
      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-mono text-zinc-400">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          className={inputClassName}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-xs font-mono text-zinc-400">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          minLength={6}
          className={inputClassName}
          required
        />
      </div>

      <input type="hidden" name="redirectTo" value={callbackUrl} />

      <button
        type="submit"
        disabled={isPending}
        aria-disabled={isPending}
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {errorMessage && (
          <p role="alert" className="text-sm text-red-400">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
