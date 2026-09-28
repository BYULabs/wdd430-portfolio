import type { NextAuthConfig } from 'next-auth';

// Edge-safe config shared with proxy.ts. Do not import Node-only modules (bcrypt, db) here.
export const authConfig = {
  trustHost: true, // needed outside Vercel, e.g. `next start` locally
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtected = nextUrl.pathname.startsWith('/dashboard');

      if (isProtected) {
        return isLoggedIn; // false redirects to /login
      }

      // Redirect already-logged-in users away from the login page
      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/dashboard/projects', nextUrl));
      }

      return true;
    },
  },
  providers: [], // providers are added in auth.ts
} satisfies NextAuthConfig;
