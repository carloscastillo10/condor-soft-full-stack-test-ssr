import moment from "moment-timezone";
import { env } from "~/env";

const getUtcData = (date: Date) => {
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();
  const dayOfMonth = date.getUTCDate();
  const month = date.getUTCMonth() + 1;

  return { minutes, hours, dayOfMonth, month };
};

const getTimeZoneData = (date: Date) => {
  const zonedDate = moment(date).utc().add(5, "hours");
  const minutes = zonedDate.minutes();
  const hours = zonedDate.hours();
  const dayOfMonth = zonedDate.date();
  const month = zonedDate.month() + 1;

  return { minutes, hours, dayOfMonth, month };
};

const generateCron = (date: Date) => {
  const { minutes, hours, dayOfMonth, month } =
    env.NODE_ENV === "production" ? getTimeZoneData(date) : getUtcData(date);

  const dayOfWeek = "*";
  const cron = `${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek}`;

  return cron;
};

export { generateCron };
