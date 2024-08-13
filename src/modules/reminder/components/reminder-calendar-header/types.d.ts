import {
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "../../types";

export type ReminderCalendarHeaderProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["header"]
> & {
  isLoading: boolean;
  selectedDay: ReminderCalendarDate;
  displayedDate: string;
  onChangeDirection: (
    direction: ReminderCalendarDirection,
    customDate?: Date,
  ) => void;
};
