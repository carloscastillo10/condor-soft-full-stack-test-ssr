import { parse } from "date-fns";

const parseDateTimeToDateTime = (date: Date, time: string) =>
  parse(
    `${date.toISOString().split("T")[0]} ${time}:00`,
    "yyyy-MM-dd HH:mm:ss",
    new Date(),
  );

export { parseDateTimeToDateTime };
