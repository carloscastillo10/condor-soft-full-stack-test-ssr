import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate } from "../../types";

export type ReminderShortListProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"]
> & {
  day: ReminderCalendarDate;
  rows: number;
  reminders: Reminder[];
};
