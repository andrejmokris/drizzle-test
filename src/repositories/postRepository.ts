import { db } from '../db/db';
import { posts } from '../db/schema';
import { eq } from 'drizzle-orm';

export const findById = async (id: number) => {
  const data = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return data[0];
};

export const findAll = async (userId: number) => {
  return await db.select().from(posts).where(eq(posts.userId, userId));
};
