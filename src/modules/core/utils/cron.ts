import { format } from "date-fns";

const generateCron = (date: Date) => {
  const cron = format(date.toUTCString(), "m H d M *");
  console.log(cron);
  console.log(date.getTime() / 1000);

  return cron;
};

export { generateCron };
