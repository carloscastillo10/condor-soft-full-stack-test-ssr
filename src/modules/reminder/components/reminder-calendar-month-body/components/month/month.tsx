import { reminders } from "~/modules/reminder/store/reminders";
import { Week } from "../week";
import { type MonthProps } from "./types";

const Month = ({
  selectedMonth,
  daysOfMonth,
  numberOfWeekDays,
  onChangeDirection,
  ...props
}: MonthProps) => {
  const rows = daysOfMonth.length / numberOfWeekDays;
  const weekDays = Array.from({ length: rows }).map((_, index) =>
    daysOfMonth.slice(index * numberOfWeekDays, (index + 1) * numberOfWeekDays),
  );
  const monthReminders = [...reminders]; // get of api

  return (
    <div className="flex h-full w-full flex-col" {...props}>
      {weekDays.map((weekDays, index) => (
        <Week
          key={`${selectedMonth.year}-${selectedMonth.monthNumber}-${index}`}
          weekDays={weekDays}
          selectedMonth={selectedMonth}
          rows={rows}
          reminders={monthReminders}
          onChangeDirection={onChangeDirection}
        />
      ))}
    </div>
  );
};

export { Month };
