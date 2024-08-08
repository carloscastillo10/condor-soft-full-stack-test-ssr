import { useCalendar } from "../../hooks/useCalendar";
import { ReminderCalendarHeader } from "../reminder-calendar-header";
import { ReminderCalendarMonth } from "../reminder-calendar-month";
import { type ReminderCalendarProps } from "./types";

const ReminderCalendar = ({ ...props }: ReminderCalendarProps) => {
  const { state, functions } = useCalendar({
    date: new Date(),
    numberOfWeekDays: 7,
  });

  return (
    <div className="flex h-full flex-col gap-4" {...props}>
      <ReminderCalendarHeader
        selectedDay={state.selectedDay}
        displayedDate={state.displayedDate}
        onChangeDirection={functions.onChangeDirection}
      />
      <ReminderCalendarMonth
        selectedMonth={state.selectedMonth}
        weekDaysNames={state.weekDaysNames}
        daysOfMonth={state.daysOfMonth}
        numberOfWeekDays={state.numberOfWeekDays}
      />
    </div>
  );
};

export { ReminderCalendar };
