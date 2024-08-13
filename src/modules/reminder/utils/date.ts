import { format, toZonedTime } from "date-fns-tz";
import moment from "moment-timezone";

const timeZone = "UTC";

const parseToUTCTimeZone = (date: Date) => {
  return toZonedTime(date, timeZone);
};

const parseDateTimeToDateTime = (date: Date, time: string) => {
  const dateString = moment(date).utc().format("YYYY-MM-DD");

  const parsedDate = moment.tz(
    `${dateString} ${time}`,
    "YYYY-MM-DD HH:mm",
    timeZone,
  );

  return parsedDate.toDate();
};

const formatDateToNotificationDate = (date: Date) => {
  return format(date, "EEEE, MMMM do 'at' h:mma", { timeZone });
};

export {
  formatDateToNotificationDate,
  parseDateTimeToDateTime,
  parseToUTCTimeZone,
};
