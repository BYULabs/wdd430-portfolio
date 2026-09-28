import type { Metadata } from 'next';
import { Suspense } from 'react';
import { LoginForm } from '@/components/login-form';

export const metadata: Metadata = {
  title: 'Sign In | BYU Labs',
};

export default function LoginPage() {
  return (
    <div className="flex justify-center py-16">
      <div className="w-full max-w-sm">
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-3 font-mono">
          {'// Owner Access'}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-6">Sign In</h1>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
