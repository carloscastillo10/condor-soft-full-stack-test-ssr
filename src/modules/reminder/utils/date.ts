import { parse } from "date-fns";
import { format, toZonedTime } from "date-fns-tz";

const timeZone = "UTC";

const parseToUTClTimeZone = (date: Date) => {
  return toZonedTime(date, timeZone);
};

const parseDateTimeToDateTime = (date: Date, time: string) => {
  const parsedDate = parse(
    `${date.toISOString().split("T")[0]} ${time}:00`,
    "yyyy-MM-dd HH:mm:ss",
    new Date(),
  );

  return parseToUTClTimeZone(parsedDate);
};

const formatDateToNotificationDate = (date: Date) => {
  return format(date, "EEEE, MMMM do 'at' h:mma", { timeZone });
};

export {
  formatDateToNotificationDate,
  parseDateTimeToDateTime,
  parseToUTClTimeZone,
};
