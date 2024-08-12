import { scheduleJob } from "~/modules/core/services";
import { type Reminder } from "~/modules/core/types";
import { generateCron } from "~/modules/core/utils/cron";

const scheduleReminder = async (reminder: Reminder) => {
  await scheduleJob({
    destination: "/api/notifications/email",
    cron: generateCron(reminder.start),
    body: JSON.stringify({
      title: reminder.title,
      start: reminder.start,
      user: reminder.user,
    }),
  });
};

export { scheduleReminder };
