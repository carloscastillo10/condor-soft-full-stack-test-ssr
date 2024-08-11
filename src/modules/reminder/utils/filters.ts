import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate } from "../types";
import { checkDateIsEqual } from "./calendar";

const filterRemindersByDate = (
  reminders: Reminder[],
  day: ReminderCalendarDate,
) => {
  const dayReminders = reminders.filter((reminder) =>
    checkDateIsEqual(reminder.start, day.date),
  );

  return dayReminders;
};

const filterRemindersByWeek = (
  reminders: Reminder[],
  weekDays: ReminderCalendarDate[],
) => {
  const weekReminders = weekDays.map((day) =>
    filterRemindersByDate(reminders, day),
  );

  return weekReminders;
};

export { filterRemindersByDate, filterRemindersByWeek };
