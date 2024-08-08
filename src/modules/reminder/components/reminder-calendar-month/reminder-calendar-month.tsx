import { ReminderCalendarMonthBody } from "../reminder-calendar-month-body";
import { ReminderCalendarMonthHeader } from "../reminder-calendar-month-header";
import { type ReminderCalendarMonthProps } from "./types";

const ReminderCalendarMonth = ({
  selectedMonth,
  weekDaysNames,
  daysOfMonth,
  numberOfWeekDays,
  ...props
}: ReminderCalendarMonthProps) => (
  <div className="flex h-full flex-col gap-4" {...props}>
    <ReminderCalendarMonthHeader weekDaysNames={weekDaysNames} />
    <ReminderCalendarMonthBody
      selectedMonth={selectedMonth}
      daysOfMonth={daysOfMonth}
      numberOfWeekDays={numberOfWeekDays}
    />
  </div>
);

export { ReminderCalendarMonth };
