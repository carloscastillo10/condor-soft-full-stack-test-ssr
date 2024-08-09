import { Month } from "./components/month";
import { type ReminderCalendarMonthBodyProps } from "./types";

const ReminderCalendarMonthBody = ({
  selectedMonth,
  daysOfMonth,
  numberOfWeekDays,
  ...props
}: ReminderCalendarMonthBodyProps) => (
  <div className="flex h-full" {...props}>
    <Month
      selectedMonth={selectedMonth}
      daysOfMonth={daysOfMonth}
      numberOfWeekDays={numberOfWeekDays}
    />
  </div>
);

export { ReminderCalendarMonthBody };