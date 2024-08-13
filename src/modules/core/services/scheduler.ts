import { env } from "~/env";
import { scheduler } from "~/server/scheduler";
import { type Job } from "../types";

const scheduleJob = async ({ destination, cron, body }: Job) => {
  return await scheduler.schedules.create({
    destination: `${env.QSTASH_BASE_URL}${destination}`,
    cron,
    body,
  });
};

const deleteJob = async (scheduleId: string) => {
  // await scheduler.schedules.delete(scheduleId);
  await scheduler.schedules.pause({ schedule: scheduleId });
};

export { deleteJob, scheduleJob };
