import { parse } from "date-fns";
import { type Reminder } from "~/modules/core/types";
import { db } from "~/server/db";
import { type CreateReminder } from "../types";

const createReminder = async (data: CreateReminder): Promise<Reminder> => {
  console.log("dattita:", data);
  const { title, date, time, color, userId } = data;
  const startDate = parse(
    `${date.toISOString().split("T")[0]} ${time}:00`,
    "yyyy-MM-dd HH:mm:ss",
    new Date(),
  );

  console.log({
    data: {
      title,
      startDate,
      color,
      userId,
    },
  });

  const newReminder = await db.reminder.create({
    data: {
      title,
      startDate,
      color,
      userId,
    },
  });

  console.log("newReminder:", newReminder);

  return newReminder;
};

export { createReminder };
