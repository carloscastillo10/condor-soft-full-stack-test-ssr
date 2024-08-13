import { type Reminder } from "~/modules/core/types";

export type ReminderItemProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"] & {
    reminder: Reminder;
  }
>;
