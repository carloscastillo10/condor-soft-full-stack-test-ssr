import { type Month, type WeekDayName } from "../../types";

export type ReminderCalendarMonthProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"] & {
    selectedMonth: Month;
    weekDaysNames: WeekDayName[];
    daysOfMonth: ReminderCalendarDate[];
    numberOfWeekDays: number;
  }
>;
