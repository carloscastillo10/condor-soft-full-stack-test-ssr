import { useCalendar } from "../../hooks/useCalendar";
import { CalendarHeader } from "../calendar-header";
import { type ReminderCalendarProps } from "./types";

const ReminderCalendar = ({ ...props }: ReminderCalendarProps) => {
  const { state, functions } = useCalendar();

  return (
    <div className="grid gap-4" {...props}>
      <CalendarHeader
        selectedDay={state.selectedDay}
        displayedDate={state.displayedDate}
        onChangeDirection={functions.onChangeDirection}
      />
    </div>
  );
};

export { ReminderCalendar };
