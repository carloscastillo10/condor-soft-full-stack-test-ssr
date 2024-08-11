import {
  type Month,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "../../types";

export type ReminderCalendarMonthBodyProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"] & {
    selectedMonth: Month;
    daysOfMonth: ReminderCalendarDate[];
    numberOfWeekDays: number;
    onChangeDirection: (
      direction: ReminderCalendarDirection,
      customDate?: Date,
    ) => void;
  }
>;
