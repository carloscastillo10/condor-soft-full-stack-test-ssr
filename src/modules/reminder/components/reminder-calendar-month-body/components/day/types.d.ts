import { type Reminder } from "~/modules/core/types";
import {
  type Month,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "~/modules/reminder/types";

export type DayProps = OmitNonHTMLAttributes<JSX.IntrinsicElements["div"]> & {
  selectedMonth: Month;
  day: ReminderCalendarDate;
  rows: number;
  reminders: Reminder[];
  onChangeDirection: (
    direction: ReminderCalendarDirection,
    customDate?: Date,
  ) => void;
};
