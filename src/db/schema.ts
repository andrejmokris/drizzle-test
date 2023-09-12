import { pgTable, serial, text, varchar, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  email: text('email').unique(),
  createdAt: timestamp('createdAt').defaultNow(),
  password: varchar('password', { length: 128 })
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }),
  text: text('text'),
  public: boolean('public').default(false),
  userId: integer('user_id').references(() => users.id)
});

export const resetToken = pgTable('resTokens', {
  id: serial('id').primaryKey(),
  token: varchar('token', { length: 128 }),
  expireDate: timestamp('expireDate').default(new Date(Date.now() + 2 * 60 * 60 * 1000)), // 2 hours from now
  userId: integer('user_id').references(() => users.id)
});
