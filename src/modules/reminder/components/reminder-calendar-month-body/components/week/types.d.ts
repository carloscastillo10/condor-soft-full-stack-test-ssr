import {
  type Month,
  type ReminderCalendarDate,
} from "~/modules/reminder/types";

export type WeekProps = OmitNonHTMLAttributes<JSX.IntrinsicElements["div"]> & {
  selectedMonth: Month;
  weekDays: ReminderCalendarDate[];
  rows: number;
};
