# BYU Labs Portfolio

Portfolio site for **Sebastián Iturralde**, a full-stack developer. It shows personal projects, BYU coursework and labs, and open-source work. Built for WDD 430 (Web Full-Stack Development) with the Next.js App Router, Postgres, and Auth.js.

## Features

- **Public portfolio:** a home page with featured projects, plus About and Contact pages.
- **Project browsing:** search and pagination on `/projects`, category pages for open-source and school projects, and a read-only detail page for each project.
- **Owner dashboard:** the owner signs in and creates, edits, and deletes projects under `/dashboard`.
- **Authentication:** Auth.js v5 with a Credentials provider and bcrypt-hashed passwords. Sessions are stored in a JWT cookie.
- **Validation:** Zod checks project forms and login credentials on the server.

## Routes

| Route | Access | Description |
| --- | --- | --- |
| `/` | Public | Intro and featured projects |
| `/about` | Public | Background, focus areas, and tech stack |
| `/contact` | Public | Email, location, social links, and a contact form (the form is UI only for now) |
| `/projects` | Public | All projects, with search and pagination |
| `/projects/opensource` | Public | Open-source projects, streamed with a loading skeleton |
| `/projects/school` | Public | BYU coursework and labs |
| `/projects/[id]` | Public | Detail page for a single project |
| `/login` | Public | Owner sign-in |
| `/dashboard/projects` | Owner | List of projects with Edit and Delete buttons |
| `/dashboard/projects/new` | Owner | Form for creating a project |
| `/dashboard/projects/[id]/edit` | Owner | Form for editing a project |
| `/api/projects` | Public | JSON list of projects (optional `?type=personal\|school\|opensource`) |
| `/api/projects/[id]` | Public | JSON for a single project |

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components, Server Actions) with React 19
- TypeScript and Tailwind CSS v4
- Postgres through [`@vercel/postgres`](https://vercel.com/docs/storage/vercel-postgres)
- [Auth.js v5](https://authjs.dev) (`next-auth@beta`) and `bcryptjs`
- Zod for validation
- `react-feather` for icons

## Project Structure

```
auth.config.ts        # Auth.js config shared with proxy.ts (no Node-only imports)
auth.ts               # Credentials provider; exports auth, signIn, signOut
proxy.ts              # Guards /dashboard routes (Next 16's replacement for middleware.ts)
app/
  lib/actions.ts      # Server Actions: authenticate, createProject, updateProject, deleteProject
  dashboard/          # Owner-only pages for managing projects
  projects/           # Public project pages
  login/              # Sign-in page
  api/                # JSON API routes and the Auth.js route handler
components/           # UI components (ProjectCard, LoginForm, SignOutButton, ...)
lib/
  projects-db.ts      # Project queries
  users-db.ts         # User lookup for sign-in
scripts/
  seed-owner.mjs      # Creates the users table and the owner account
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` with the Postgres connection variables (`POSTGRES_URL` and the related values from your Vercel or Neon database). Add an `AUTH_SECRET` too:

   ```bash
   echo "AUTH_SECRET=\"$(openssl rand -base64 33)\"" >> .env.local
   ```

3. Create the owner account. This also creates the `users` table if it doesn't exist. Running it again with the same email updates the password.

   ```bash
   OWNER_NAME="Your Name" OWNER_EMAIL=you@example.com OWNER_PASSWORD='your-password' \
     node --env-file=.env.local scripts/seed-owner.mjs
   ```

4. Start the dev server and open [http://localhost:3000](http://localhost:3000):

   ```bash
   npm run dev
   ```

Sign in at `/login` to manage projects.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deployment

The site deploys on [Vercel](https://vercel.com). Add the Postgres variables and `AUTH_SECRET` to the Vercel project's environment variables. Vercel trusts its own host automatically, so no extra Auth.js host setting is needed there.
