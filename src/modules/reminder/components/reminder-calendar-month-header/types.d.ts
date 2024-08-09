import { type WeekDayName } from "../../types";

export type ReminderCalendarMonthHeader = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"] & {
    weekDaysNames: WeekDayName[];
  }
>;
