import { useMemo, useState } from "react";
import {
  type Month,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "../types";
import {
  checkDateIsEqual,
  createDate,
  createMonth,
  getCalendarDaysOfMonth,
  getWeekDaysNames,
} from "../utils/calendar";

const useCalendar = ({
  date,
  locale = "en-us",
  numberOfWeekDays = 7,
  firstWeekDay = 1,
}: {
  date: Date;
  locale?: string;
  numberOfWeekDays?: number;
  firstWeekDay?: number;
}) => {
  const [direction, setDirection] =
    useState<ReminderCalendarDirection>("today");

  const [selectedDay, setSelectedDay] = useState<ReminderCalendarDate>(
    createDate(date, locale),
  );

  const [lastSelectedDay, setLastSelectedDay] =
    useState<ReminderCalendarDate>(selectedDay);

  const [selectedMonth, setSelectedMonth] = useState<Month>(
    createMonth(new Date(selectedDay.year, selectedDay.monthIndex), locale),
  );

  const displayedDate = useMemo(
    () => `${selectedMonth.monthName} - ${selectedMonth.year}`,
    [selectedMonth.monthName, selectedMonth.year],
  );

  const weekDaysNames = useMemo(
    () => getWeekDaysNames(locale, firstWeekDay, numberOfWeekDays),
    [firstWeekDay, locale, numberOfWeekDays],
  );

  const daysOfMonth = useMemo(
    () =>
      getCalendarDaysOfMonth(
        selectedMonth.year,
        selectedMonth.monthIndex,
        firstWeekDay,
        numberOfWeekDays,
        locale,
      ),
    [
      firstWeekDay,
      locale,
      numberOfWeekDays,
      selectedMonth.monthIndex,
      selectedMonth.year,
    ],
  );

  const onChangeState = (date: Date) => {
    const { monthIndex } = createDate(date, locale);
    const isCurrentMonth = selectedMonth.monthIndex === monthIndex;

    !isCurrentMonth && setSelectedMonth(createMonth(date, locale));
    !checkDateIsEqual(date, selectedDay.date) &&
      setSelectedDay((previousDate) => {
        setLastSelectedDay(previousDate);
        return createDate(date, locale);
      });
  };

  const onChangeDirection = (
    direction: ReminderCalendarDirection,
    customDate?: Date,
  ) => {
    setDirection(direction);
    const date =
      customDate ??
      new Date(
        selectedMonth.year,
        selectedMonth.monthIndex + (direction === "left" ? -1 : 1),
        1,
      );

    onChangeState(date);
  };

  return {
    state: {
      direction,
      selectedDay,
      lastSelectedDay,
      selectedMonth,
      displayedDate,
      weekDaysNames,
      numberOfWeekDays,
      daysOfMonth,
    },
    functions: {
      setSelectedDay,
      onChangeDirection,
    },
  };
};

export { useCalendar };
