import { format, parse } from "date-fns";

const parseDateTimeToDateTime = (date: Date, time: string) =>
  parse(
    `${date.toISOString().split("T")[0]} ${time}:00`,
    "yyyy-MM-dd HH:mm:ss",
    new Date(),
  );

const formatDateToNotificationDate = (date: Date) => {
  return format(date, "EEEE, MMMM do 'at' h:mma");
};

export { formatDateToNotificationDate, parseDateTimeToDateTime };
