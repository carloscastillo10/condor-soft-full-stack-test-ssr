import { parse } from "date-fns";
import { type Reminder } from "~/modules/core/types";
import { db } from "~/server/db";
import { type CreateReminder, type QueryReminder } from "../types";

const createReminder = async (data: CreateReminder): Promise<Reminder> => {
  const { title, date, time, color, userId } = data;
  const start = parse(
    `${date.toISOString().split("T")[0]} ${time}:00`,
    "yyyy-MM-dd HH:mm:ss",
    new Date(),
  );

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
