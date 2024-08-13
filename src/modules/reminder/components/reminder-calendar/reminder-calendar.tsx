import { useCalendar } from "../../hooks/useCalendar";
import { useCreateReminderModalStore } from "../../store/useCreateReminderModalStore";
import { AddReminderModal } from "../add-reminder-modal";
import { ReminderCalendarHeader } from "../reminder-calendar-header";
import { ReminderCalendarMonth } from "../reminder-calendar-month";
import { type ReminderCalendarProps } from "./types";

const ReminderCalendar = ({ isLoading, ...props }: ReminderCalendarProps) => {
  const { state, functions } = useCalendar({
    date: new Date(),
    numberOfWeekDays: 7,
  });

  const { isOpen } = useCreateReminderModalStore();

  return (
    <div className="flex h-full flex-col gap-4" {...props}>
      <ReminderCalendarHeader
        isLoading={isLoading}
        selectedDay={state.selectedDay}
        displayedDate={state.displayedDate}
        onChangeDirection={functions.onChangeDirection}
      />
      <ReminderCalendarMonth
        isLoading={isLoading}
        direction={state.direction}
        selectedDay={state.selectedDay}
        lastSelectedDay={state.lastSelectedDay}
        selectedMonth={state.selectedMonth}
        weekDaysNames={state.weekDaysNames}
        daysOfMonth={state.daysOfMonth}
        numberOfWeekDays={state.numberOfWeekDays}
        onChangeDirection={functions.onChangeDirection}
      />
      {isOpen && <AddReminderModal />}
    </div>
  );
};

export { ReminderCalendar };
