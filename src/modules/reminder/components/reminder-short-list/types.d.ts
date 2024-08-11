import { type Reminder } from "~/modules/core/types";

export type ReminderShortListProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"]
> & {
  rows: number;
  reminders: Reminder[];
};
