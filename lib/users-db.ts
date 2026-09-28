import { sql } from '@vercel/postgres';

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
}

interface UserRow {
  id: number;
  name: string;
  email: string;
  password_hash: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const { rows } = await sql<UserRow>`
      SELECT * FROM users WHERE email = ${email.toLowerCase()}
    `;

    if (!rows[0]) return null;
    return {
      id: rows[0].id,
      name: rows[0].name,
      email: rows[0].email,
      passwordHash: rows[0].password_hash,
    };
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
