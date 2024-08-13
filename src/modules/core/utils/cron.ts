const generateCron = (date: Date) => {
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();
  const dayOfMonth = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const dayOfWeek = "*";
  const cron = `${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek}`;

  return cron;
};

export { generateCron };
