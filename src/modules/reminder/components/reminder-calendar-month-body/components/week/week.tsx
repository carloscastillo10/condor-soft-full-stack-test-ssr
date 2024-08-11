import { useMemo } from "react";
import { filterRemindersByWeek } from "~/modules/reminder/utils/filters";
import { Day } from "../day";
import { type WeekProps } from "./types";
const Week = ({
  selectedMonth,
  weekDays,
  rows,
  reminders,
  onChangeDirection,
  ...props
}: WeekProps) => {
  const weekReminders = useMemo(
    () => filterRemindersByWeek(reminders, weekDays),
    [reminders, weekDays],
  );

  return (
    <div
      className="grid h-full w-full grid-cols-7 place-items-center"
      {...props}
    >
      {weekDays.map((day, index) => (
        <Day
          key={`${selectedMonth.year}-${selectedMonth.monthNumber}-${day.dayNumber}`}
          selectedMonth={selectedMonth}
          day={day}
          rows={rows}
          reminders={weekReminders[index]!}
          onChangeDirection={onChangeDirection}
        />
      ))}
    </div>
  );
};

export { Week };
