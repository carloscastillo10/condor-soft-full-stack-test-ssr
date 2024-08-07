import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("YOUR_POSTGRESQL_URL_HERE"),
        "You forgot to change the default DATABASE_URL",
      ),
    NEXTAUTH_URL: z
      .string()
      .url()
      .refine(
        (str) => !str.includes("YOUR_NEXTAUTH_URL_HERE"),
        "You forgot to change the default NEXTAUTH_URL",
      ),
    NEXTAUTH_SECRET: z
      .string()
      .refine(
        (str) => !str.includes("YOUR_NEXTAUTH_SECRET_HERE"),
        "You forgot to change the default NEXTAUTH_SECRET",
      ),
    GOOGLE_CLIENT_ID: z
      .string()
      .refine(
        (str) => !str.includes("YOUR_GOOGLE_CLIENT_ID_HERE"),
        "You forgot to change the default GOOGLE_CLIENT_ID",
      ),
    GOOGLE_CLIENT_SECRET: z
      .string()
      .refine(
        (str) => !str.includes("YOUR_GOOGLE_CLIENT_SECRET_HERE"),
        "You forgot to change the default GOOGLE_CLIENT_SECRET",
      ),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtime (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
