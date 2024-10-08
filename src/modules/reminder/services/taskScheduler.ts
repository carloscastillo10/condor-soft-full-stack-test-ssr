import { deleteJob, scheduleJob } from "~/modules/core/services";
import { type Reminder } from "~/modules/core/types";
import { generateCron } from "~/modules/core/utils/cron";
import { parseToUTCTimeZone } from "../utils/date";

const scheduleReminder = async (reminder: Reminder) => {
  return await scheduleJob({
    destination: "/api/notifications/email",
    cron: generateCron(parseToUTCTimeZone(reminder.start)),
    body: JSON.stringify({
      id: reminder.id,
      title: reminder.title,
      start: reminder.start,
      user: reminder.user,
    }),
  });
};

const deleteScheduleReminder = async (scheduleId: string) => {
  await deleteJob(scheduleId);
};

export { deleteScheduleReminder, scheduleReminder };
