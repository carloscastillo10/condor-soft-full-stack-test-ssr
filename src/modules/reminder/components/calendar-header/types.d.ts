import { type CalendarDate, type CalendarDirection } from "../../types";

export type CalendarHeaderProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["header"]
> & {
  selectedDay: CalendarDate;
  displayedDate: string;
  onChangeDirection: (direction: CalendarDirection, customDate?: Date) => void;
};
