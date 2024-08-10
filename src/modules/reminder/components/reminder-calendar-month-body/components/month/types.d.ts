import {
  type Month,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "~/modules/reminder/types";

export type MonthProps = OmitNonHTMLAttributes<JSX.IntrinsicElements["div"]> & {
  selectedMonth: Month;
  daysOfMonth: ReminderCalendarDate[];
  numberOfWeekDays: number;
  onChangeDirection: (
    direction: ReminderCalendarDirection,
    customDate?: Date,
  ) => void;
};
