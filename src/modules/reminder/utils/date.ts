import { format, toZonedTime } from "date-fns-tz";
import moment from "moment-timezone";

const utcTimeZone = "UTC";
const defaultTimeZone = "America/Guayaquil";

const parseToUTCTimeZone = (date: Date) => {
  return toZonedTime(date, utcTimeZone);
};

const parseToLocalTimeZone = (date: Date) => {
  return moment(date).add(5, "hours").toDate();
};

const parseDateTimeToDateTime = (date: Date, time: string) => {
  const dateString = moment(date).utc().format("YYYY-MM-DD");

  const parsedDate = moment.tz(
    `${dateString} ${time}`,
    "YYYY-MM-DD HH:mm",
    utcTimeZone,
  );

  return parsedDate.toDate();
};

const formatDateToNotificationDate = (date: Date) => {
  return format(date, "EEEE, MMMM do 'at' h:mma", { timeZone: utcTimeZone });
};

export {
  formatDateToNotificationDate,
  parseDateTimeToDateTime,
  parseToLocalTimeZone,
  parseToUTCTimeZone,
};
