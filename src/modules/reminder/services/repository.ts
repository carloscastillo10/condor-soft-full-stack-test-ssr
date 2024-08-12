import { type Reminder } from "~/modules/core/types";
import { db } from "~/server/db";
import { type CreateReminder, type QueryReminder } from "../types";
import { parseDateTimeToDateTime } from "../utils/date";

const createReminder = async (data: CreateReminder): Promise<Reminder> => {
  const { title, date, time, color, userId } = data;
  const start = parseDateTimeToDateTime(date, "00:05");

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
    user: { id: reminderUserId, name, lastName, email },
  } = newReminder;

  return {
    id: reminderId,
    title: reminderTitle,
    start: reminderStart,
    color: reminderColor,
    user: { id: reminderUserId.toString(), name, lastName, email },
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
    include: { user: true },
  });

  return reminders.map(({ id, title, start, color, user }) => ({
    id,
    title,
    start: new Date(`${start.toString()}`),
    color,
    user: { ...user, id: user.id.toString() },
  }));
};

export { createReminder, listReminders };
