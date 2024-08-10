import {
  type Month,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "~/modules/reminder/types";

export type WeekProps = OmitNonHTMLAttributes<JSX.IntrinsicElements["div"]> & {
  selectedMonth: Month;
  weekDays: ReminderCalendarDate[];
  rows: number;
  onChangeDirection: (
    direction: ReminderCalendarDirection,
    customDate?: Date,
  ) => void;
};
