import { type Reminder } from "~/modules/core/types";
import { db } from "~/server/db";
import { type CreateReminder, type QueryReminder } from "../types";
import { parseDateTimeToDateTime } from "../utils/date";

const createReminder = async (data: CreateReminder): Promise<Reminder> => {
  const { title, date, time, color, userId } = data;
  const start = parseDateTimeToDateTime(date, time);

  const newReminder = await db.reminder.create({
    data: {
      title,
      start,
      color,
      userId,
    },
  });

  return {
    id: newReminder.id,
    title: newReminder.title,
    start: newReminder.start,
    color: newReminder.color,
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
