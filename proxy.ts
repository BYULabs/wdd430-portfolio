// Next.js 16 renamed middleware.ts to proxy.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Run on all routes except API routes, static files, and Next.js internals
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
