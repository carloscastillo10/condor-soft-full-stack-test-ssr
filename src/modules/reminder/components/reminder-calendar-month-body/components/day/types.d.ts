import {
  type Month,
  type ReminderCalendarDate,
} from "~/modules/reminder/types";

export type DayProps = OmitNonHTMLAttributes<JSX.IntrinsicElements["div"]> & {
  selectedMonth: Month;
  day: ReminderCalendarDate;
  rows: number;
};
