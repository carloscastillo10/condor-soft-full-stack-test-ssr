import { type ReminderCalendarDate, type WeekDayName } from "../types";

const createDate = (date: Date, locale: string): ReminderCalendarDate => {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const dayNumber = date.getDate();
  const day = date.toLocaleDateString(locale, { weekday: "long" });
  const dayNumberInWeek = date.getDay() + 1;
  const dayShort = date.toLocaleDateString(locale, { weekday: "short" });
  const year = date.getFullYear();
  const yearShort = date.toLocaleDateString(locale, { year: "2-digit" });
  const month = date.toLocaleDateString(locale, { month: "long" });
  const monthShort = date.toLocaleDateString(locale, { month: "short" });
  const monthNumber = date.getMonth() + 1;
  const monthIndex = date.getMonth();
  const timestamp = date.getTime();

  return {
    date,
    seconds,
    minutes,
    hours,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
  };
};

const getDay = (
  year: number,
  monthIndex: number,
  dayNumber: number,
  locale: string,
): ReminderCalendarDate => {
  const date = new Date(year, monthIndex, dayNumber);
  const calendarDay = createDate(date, locale);

  return {
    ...calendarDay,
  };
};

const getMonthNumberOfDays = (monthIndex: number, yearNumber: number) => {
  console.log(new Date(yearNumber, monthIndex + 1, 0));
  return new Date(yearNumber, monthIndex + 1, 0).getDate();
};

const createMonth = (date: Date, locale: string) => {
  const monthDate = createDate(date, locale);
  const { year, month: monthName, monthNumber, monthIndex } = monthDate;

  const createMonthDays = () => {
    const days = Array.from({
      length: getMonthNumberOfDays(monthIndex, year),
    }).map((_, i) => getDay(year, monthIndex, i + 1, locale));

    return days;
  };

  return {
    date: monthDate.date,
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays,
  };
};

const getSortedWeekDaysNames = (
  weekDaysNames: WeekDayName[],
): WeekDayName[] => {
  const sortedWeekDaysNames = weekDaysNames.sort(
    (previousDayName, nextDayName) => {
      const previousDay = previousDayName.dayNumberInWeek;
      const nextDay = nextDayName.dayNumberInWeek;
      return previousDay - nextDay;
    },
  );

  return sortedWeekDaysNames;
};

const getWeekDaysNames = (
  locale: string,
  firstWeekDay: number,
  numberOfWeekDays: number,
): WeekDayName[] => {
  const date = new Date();
  const weekDaysNames: WeekDayName[] = Array.from({
    length: numberOfWeekDays,
  }).map((_, weekDay) => {
    const { day, dayShort, dayNumberInWeek } = createDate(
      new Date(date.getFullYear(), date.getMonth(), date.getDate() + weekDay),
      locale,
    );

    return { day, dayShort, dayNumberInWeek: dayNumberInWeek - 1 };
  });

  const sortedWeekDaysNames = getSortedWeekDaysNames(weekDaysNames);

  return [
    ...sortedWeekDaysNames.slice(firstWeekDay - 1),
    ...sortedWeekDaysNames.slice(0, firstWeekDay - 1),
  ];
};

const generateDaysRange = (
  year: number,
  monthIndex: number,
  dayFrom: number,
  countDays: number,
  locale: string,
): ReminderCalendarDate[] => {
  const days = Array(countDays)
    .fill(dayFrom)
    .map((_, index) => getDay(year, monthIndex, dayFrom + index, locale));

  return days;
};

const getCalendarDaysOfMonth = (
  year: number,
  monthIndex: number,
  firstWeekDayNumber: number,
  numberOfWeekDays: number,
  locale: string,
  totalDays?: number,
): ReminderCalendarDate[] => {
  const days = createMonth(
    new Date(year, monthIndex),
    locale,
  ).createMonthDays();
  const monthNumberOfDays = getMonthNumberOfDays(monthIndex, year);
  const firstDay = days[0]!;
  const lastDay = days[monthNumberOfDays - 1]!;
  const shiftIndex = firstWeekDayNumber - 1;
  console.log(days, year, monthIndex, monthNumberOfDays);

  const numberOfPreviousDays =
    firstDay.dayNumberInWeek - 1 - shiftIndex < 0
      ? numberOfWeekDays - (firstWeekDayNumber - firstDay.dayNumberInWeek)
      : firstDay.dayNumberInWeek - 1 - shiftIndex;

  const numberOfNextDays =
    numberOfWeekDays - lastDay.dayNumberInWeek + shiftIndex > 6
      ? numberOfWeekDays -
        lastDay.dayNumberInWeek -
        (numberOfWeekDays - shiftIndex)
      : numberOfWeekDays - lastDay.dayNumberInWeek + shiftIndex;

  const totalCalendarDays =
    days.length + numberOfPreviousDays + numberOfNextDays;
  const numberRestDays =
    totalDays !== undefined ? totalDays - totalCalendarDays : 0;

  const daysFromPreviousMonth = generateDaysRange(
    firstDay.year,
    firstDay.monthIndex,
    firstDay.dayNumber - numberOfPreviousDays,
    numberOfPreviousDays,
    locale,
  );
  const daysFromNextMonth = generateDaysRange(
    lastDay.year,
    lastDay.monthIndex + 1,
    1,
    numberOfNextDays + numberRestDays,
    locale,
  );

  const calendarDaysOfMonth: ReminderCalendarDate[] = [
    ...daysFromPreviousMonth,
    ...days,
    ...daysFromNextMonth,
  ];

  return calendarDaysOfMonth;
};

const checkDateIsEqual = (date1: Date, date2: Date): boolean => {
  const isCurrentYear = date1.getFullYear() === date2.getFullYear();
  const isCurrentMonth = date1.getMonth() === date2.getMonth();
  const isCurrentDay = date1.getDate() === date2.getDate();

  return isCurrentYear && isCurrentMonth && isCurrentDay;
};

const checkIsToday = (date: Date): boolean => {
  const today = new Date();

  return checkDateIsEqual(today, date);
};

export {
  checkDateIsEqual,
  checkIsToday,
  createDate,
  createMonth,
  getCalendarDaysOfMonth,
  getWeekDaysNames,
};
