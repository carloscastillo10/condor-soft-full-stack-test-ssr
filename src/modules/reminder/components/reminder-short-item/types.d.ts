import { type Reminder } from "~/modules/core/types";

export type ReminderShortItemProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["li"] & {
    reminder: Reminder;
  }
>;
