import {
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "../types";
import { checkIsToday } from "./calendar";

const getAnimation = (
  direction: ReminderCalendarDirection,
  selectedDay: ReminderCalendarDate,
  lastSelectedDay: ReminderCalendarDate,
): string => {
  if (direction === "today" || direction === "custom") {
    const isToday =
      checkIsToday(lastSelectedDay.date) && checkIsToday(selectedDay.date);

    if (isToday || selectedDay.monthIndex === lastSelectedDay.monthIndex) {
      return "animate-none";
    }

    const isPast = selectedDay.date < lastSelectedDay.date;
    const animation = isPast
      ? "animate-transition-left"
      : "animate-transition-right";

    return animation;
  }

  const animation =
    direction === "left"
      ? "animate-transition-left"
      : "animate-transition-right";

  return animation;
};

export { getAnimation };
