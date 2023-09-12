import { eq } from 'drizzle-orm';
import { db } from '../db/db';
import { resetToken, users } from '../db/schema';
import { ConflictError } from '../utils/errors';

export const findById = async (id: number) => {
  const data = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return data[0];
};

export const findByEmail = async (email: string) => {
  const data = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return data[0];
};

export const create = async (full_name: string, email: string, password: string) => {
  try {
    const data = await db.insert(users).values({ fullName: full_name, email: email, password: password }).returning();
    return data;
  } catch (error) {
    throw new ConflictError('User with the email already exists');
  }
};

export const resetPassword = async (token: string, userID: number) => {
  try {
    const data = await db.insert(resetToken).values({ token: token, userId: userID }).returning();
    return data;
  } catch (error) {
    throw new ConflictError('Password reset failed, try again!');
  }
};
