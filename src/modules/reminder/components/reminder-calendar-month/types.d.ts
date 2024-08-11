import {
  type Month,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
  type WeekDayName,
} from "../../types";

export type ReminderCalendarMonthProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"] & {
    direction: ReminderCalendarDirection;
    selectedDay: ReminderCalendarDate;
    lastSelectedDay: ReminderCalendarDate;
    selectedMonth: Month;
    weekDaysNames: WeekDayName[];
    daysOfMonth: ReminderCalendarDate[];
    numberOfWeekDays: number;
    onChangeDirection: (
      direction: ReminderCalendarDirection,
      customDate?: Date,
    ) => void;
  }
>;
