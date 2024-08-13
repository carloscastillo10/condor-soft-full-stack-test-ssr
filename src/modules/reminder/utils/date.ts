import { parse } from "date-fns";
import { format, fromZonedTime, toZonedTime } from "date-fns-tz";

const timeZone = "UTC";

const parseToUTCTimeZone = (date: Date) => {
  return toZonedTime(date, timeZone);
};

const parseDateTimeToDateTime = (date: Date, time: string) => {
  const dateString = date.toISOString().split("T")[0];

  const parsedDate = parse(
    `${dateString} ${time}:00`,
    "yyyy-MM-dd HH:mm:ss",
    new Date(),
  );

  return fromZonedTime(toZonedTime(parsedDate, "America/Guayaquil"), timeZone);
};

const formatDateToNotificationDate = (date: Date) => {
  return format(date, "EEEE, MMMM do 'at' h:mma", { timeZone });
};

export {
  formatDateToNotificationDate,
  parseDateTimeToDateTime,
  parseToUTCTimeZone,
};
