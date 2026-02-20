import { betterAuth } from "better-auth";
import { sso } from "@better-auth/sso";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.SUPABASE_DB_URL,
  }),
  plugins: [sso(), nextCookies()],
});
