import {
  type Month,
  type ReminderCalendarDate,
} from "~/modules/reminder/types";

export type MonthProps = OmitNonHTMLAttributes<JSX.IntrinsicElements["div"]> & {
  selectedMonth: Month;
  daysOfMonth: ReminderCalendarDate[];
  numberOfWeekDays: number;
};
