import {
  type Month,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "~/modules/reminder/types";

export type DayProps = OmitNonHTMLAttributes<JSX.IntrinsicElements["div"]> & {
  selectedMonth: Month;
  day: ReminderCalendarDate;
  rows: number;
  onChangeDirection: (
    direction: ReminderCalendarDirection,
    customDate?: Date,
  ) => void;
};
