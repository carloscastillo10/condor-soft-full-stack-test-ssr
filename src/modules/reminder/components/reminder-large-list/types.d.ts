import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate } from "../../types";

export type ReminderLargeListProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"]
> & {
  day: ReminderCalendarDate;
  restCountReminders: number;
  reminders: Reminder[];
};
