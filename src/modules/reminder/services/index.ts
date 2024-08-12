import { scheduleJob } from "~/modules/core/services/scheduler";
import { type Reminder } from "~/modules/core/types";
import { generateCron } from "~/modules/core/utils/cron";
import { db } from "~/server/db";
import { type CreateReminder, type QueryReminder } from "../types";
import { parseDateTimeToDateTime } from "../utils/date";

const createReminder = async (data: CreateReminder): Promise<Reminder> => {
  const { title, date, time, color, userId } = data;
  const start = parseDateTimeToDateTime(date, "19:05");

  const newReminder = await db.reminder.create({
    data: {
      title,
      start,
      color,
      userId,
    },
    include: { user: true },
  });

  const {
    id: reminderId,
    title: reminderTitle,
    start: reminderStart,
    color: reminderColor,
    user,
  } = newReminder;

  await scheduleJob({
    destination: "/api/notifications/email",
    cron: generateCron(reminderStart),
    body: JSON.stringify({
      title: reminderTitle,
      start: reminderStart,
      email: user.email,
    }),
  });

  return {
    id: reminderId,
    title: reminderTitle,
    start: reminderStart,
    color: reminderColor,
  };
};

const listReminders = async (query: QueryReminder): Promise<Reminder[]> => {
  const { userId, from, to } = query;
  const reminders = await db.reminder.findMany({
    where: {
      userId,
      start: {
        gte: from,
        lte: to,
      },
    },
    orderBy: { start: "asc" },
  });

  return reminders.map(({ id, title, start, color }) => ({
    id,
    title,
    start: new Date(`${start.toString()}`),
    color,
  }));
};

export { createReminder, listReminders };
