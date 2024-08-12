import { env } from "~/env";
import { scheduler } from "~/server/scheduler";
import { type Job } from "../types";

const scheduleJob = async ({ destination, cron, body }: Job) => {
  console.log(`${env.QSTASH_BASE_URL}${destination}`, cron, body);
  await scheduler.schedules.create({
    destination: `${env.QSTASH_BASE_URL}${destination}`,
    cron,
    body,
  });
};

export { scheduleJob };
