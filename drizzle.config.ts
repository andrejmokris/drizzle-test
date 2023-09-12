import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    user: 'andrej',
    password: 'heslo',
    host: '127.0.0.1',
    port: 5433,
    database: 'be_lesson'
  }
} satisfies Config;
