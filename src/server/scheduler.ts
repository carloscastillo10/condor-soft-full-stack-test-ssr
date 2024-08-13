import { Client } from "@upstash/qstash";
import { env } from "~/env";

export const scheduler = new Client({ token: env.QSTASH_TOKEN });
