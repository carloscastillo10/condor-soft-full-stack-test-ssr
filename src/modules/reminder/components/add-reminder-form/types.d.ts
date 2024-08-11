import {
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "../../types";

export type AddReminderFormProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["form"] & {
    selectedDay: ReminderCalendarDate;
    onChangeDirection: (
      direction: ReminderCalendarDirection,
      customDate?: Date,
    ) => void;
  }
>;
