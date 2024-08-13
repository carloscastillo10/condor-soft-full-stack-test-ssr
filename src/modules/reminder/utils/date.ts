import { format, parse } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const timeZone = "America/Guayaquil";

const parseDateTimeToDateTime = (date: Date, time: string) => {
  const parsedDate = parse(
    `${date.toISOString().split("T")[0]} ${time}:00`,
    "yyyy-MM-dd HH:mm:ss",
    new Date(),
  );

  return toZonedTime(parsedDate, timeZone);
};

const formatDateToNotificationDate = (date: Date) => {
  return format(date, "EEEE, MMMM do 'at' h:mma");
};

export { formatDateToNotificationDate, parseDateTimeToDateTime };
