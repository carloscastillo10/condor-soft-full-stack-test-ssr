import { type Dispatch, type LegacyRef } from "react";
import {
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "../../types";

export type AddReminderModalProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["div"]
> & {
  modalRef: LegacyRef<HTMLDivElement>;
  isOpen: boolean;
  selectedDay: ReminderCalendarDate;
  setIsOpen: Dispatch<boolean>;
  onChangeDirection: (
    direction: ReminderCalendarDirection,
    customDate?: Date,
  ) => void;
};
