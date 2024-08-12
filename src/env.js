/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

function createStringEnvValidator({ name, isUrl = false }) {
  return z
    .string()
    .refine(
      (str) => !str.includes(`YOUR_${name}_HERE`),
      `You forgot to change the default ${name}`,
    )
    .pipe(isUrl ? z.string().url() : z.string());
}

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: createStringEnvValidator({
      name: "DATABASE_URL",
      isUrl: true,
    }),
    NEXTAUTH_URL: createStringEnvValidator({
      name: "NEXTAUTH_URL",
      isUrl: true,
    }),
    NEXTAUTH_SECRET: createStringEnvValidator({ name: "NEXTAUTH_SECRET" }),
    GOOGLE_CLIENT_ID: createStringEnvValidator({ name: "NEXTAUTH_SECRET" }),
    GOOGLE_CLIENT_SECRET: createStringEnvValidator({ name: "NEXTAUTH_SECRET" }),
    QSTASH_BASE_URL: createStringEnvValidator({
      name: "QSTASH_BASE_URL",
      isUrl: true,
    }),
    QSTASH_TOKEN: createStringEnvValidator({ name: "QSTASH_TOKEN" }),
    PUSHER_APP_ID: createStringEnvValidator({ name: "PUSHER_APP_ID" }),
    NEXT_PUBLIC_PUSHER_KEY: createStringEnvValidator({
      name: "NEXT_PUBLIC_PUSHER_KEY",
    }),
    PUSHER_SECRET: createStringEnvValidator({ name: "PUSHER_SECRET" }),
    NEXT_PUBLIC_PUSHER_CLUSTER: createStringEnvValidator({
      name: "NEXT_PUBLIC_PUSHER_CLUSTER",
    }),
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
    QSTASH_BASE_URL: process.env.QSTASH_BASE_URL,
    QSTASH_TOKEN: process.env.QSTASH_TOKEN,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    NEXT_PUBLIC_PUSHER_KEY: process.env.NEXT_PUBLIC_PUSHER_KEY,
    PUSHER_SECRET: process.env.PUSHER_SECRET,
    NEXT_PUBLIC_PUSHER_CLUSTER: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
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
