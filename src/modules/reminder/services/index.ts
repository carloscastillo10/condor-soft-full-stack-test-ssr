import { parse } from "date-fns";
import { type Reminder } from "~/modules/core/types";
import { db } from "~/server/db";
import { type CreateReminder } from "../types";

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

  console.log("newReminder:", newReminder);

  return newReminder;
};

export { createReminder };
