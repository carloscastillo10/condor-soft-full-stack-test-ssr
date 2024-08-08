import { type Month, type ReminderCalendarDate } from "../../types";

export type ReminderCalendarMonthBodyProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"] & {
    selectedMonth: Month;
    daysOfMonth: ReminderCalendarDate[];
    numberOfWeekDays: number;
  }
>;
