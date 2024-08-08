import { useMemo, useState } from "react";
import {
  type CalendarDate,
  type CalendarDirection,
  type Month,
} from "../types";
import { checkDateIsEqual, createDate, createMonth } from "../utils/calendar";

const useCalendar = (
  date: Date = new Date(),
  locale = "en-us",
  numberOfWeekDays = 7,
  firstWeekDay = 2,
) => {
  const [direction, setDirection] = useState<CalendarDirection>("today");
  const [selectedDay, setSelectedDay] = useState<CalendarDate>(
    createDate(date, locale),
  );
  const [selectedMonth, setSelectedMonth] = useState<Month>(
    createMonth(new Date(selectedDay.year, selectedDay.monthIndex), locale),
  );

  const displayedDate = useMemo(
    () => `${selectedMonth.monthName} - ${selectedMonth.year}`,
    [selectedMonth.monthName, selectedMonth.year],
  );

  const onChangeState = (date: Date) => {
    const { monthIndex } = createDate(date, locale);
    const isCurrentMonth = selectedMonth.monthIndex === monthIndex;

    !isCurrentMonth && setSelectedMonth(createMonth(date, locale));
    !checkDateIsEqual(date, selectedDay.date) &&
      setSelectedDay(createDate(date, locale));
  };

  const onChangeDirection = (
    direction: CalendarDirection,
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
      displayedDate,
    },
    functions: {
      setSelectedDay,
      onChangeDirection,
    },
  };
};

export { useCalendar };
