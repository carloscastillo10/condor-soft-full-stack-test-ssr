const generateCron = (date: Date) => {
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();
  const dayOfMonth = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const dayOfWeek = "*";
  const cron = `${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek}`;

  console.log(cron);
  console.log(date.getTime() / 1000);

  return cron;
};

export { generateCron };
