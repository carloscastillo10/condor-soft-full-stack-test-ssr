import { useSession } from "next-auth/react";
import { useRealTime } from "~/modules/core/hooks/useRealTime";
import { useCalendar } from "../../hooks/useCalendar";
import { ReminderCalendarHeader } from "../reminder-calendar-header";
import { ReminderCalendarMonth } from "../reminder-calendar-month";
import { type ReminderCalendarProps } from "./types";

const ReminderCalendar = ({ ...props }: ReminderCalendarProps) => {
  const { state, functions } = useCalendar({
    date: new Date(),
    numberOfWeekDays: 7,
  });

  const { data: session } = useSession();

  const onNotification = (data: unknown) => {
    console.log("Enviando recordatorio ahora", data);
  };

  useRealTime({
    channelName: `user-${session?.user.id}`,
    eventName: "reminder-sent",
    callback: onNotification,
  });

  return (
    <div className="flex h-full flex-col gap-4" {...props}>
      <ReminderCalendarHeader
        selectedDay={state.selectedDay}
        displayedDate={state.displayedDate}
        onChangeDirection={functions.onChangeDirection}
      />
      <ReminderCalendarMonth
        direction={state.direction}
        selectedDay={state.selectedDay}
        lastSelectedDay={state.lastSelectedDay}
        selectedMonth={state.selectedMonth}
        weekDaysNames={state.weekDaysNames}
        daysOfMonth={state.daysOfMonth}
        numberOfWeekDays={state.numberOfWeekDays}
        onChangeDirection={functions.onChangeDirection}
      />
    </div>
  );
};

export { ReminderCalendar };
