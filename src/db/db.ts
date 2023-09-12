import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres('postgres://andrej:heslo@0.0.0.0:5433/be_lesson');
export const db: PostgresJsDatabase = drizzle(queryClient);
