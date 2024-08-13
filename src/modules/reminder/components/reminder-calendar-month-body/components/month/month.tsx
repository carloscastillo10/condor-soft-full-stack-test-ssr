import { useMemo } from "react";
import { useListReminder } from "~/modules/reminder/hooks/useListReminder";
import { Week } from "../week";
import { type MonthProps } from "./types";

const Month = ({
  selectedMonth,
  daysOfMonth,
  numberOfWeekDays,
  onChangeDirection,
  ...props
}: MonthProps) => {
  const {
    state: { reminders },
  } = useListReminder({
    from: daysOfMonth[0]!,
    to: daysOfMonth[daysOfMonth.length - 1]!,
  });

  const rows = useMemo(
    () => daysOfMonth.length / numberOfWeekDays,
    [daysOfMonth.length, numberOfWeekDays],
  );

  const weekDays = useMemo(
    () =>
      Array.from({ length: rows }).map((_, index) =>
        daysOfMonth.slice(
          index * numberOfWeekDays,
          (index + 1) * numberOfWeekDays,
        ),
      ),
    [daysOfMonth, numberOfWeekDays, rows],
  );

  return (
    <div className="flex h-full w-full flex-col" {...props}>
      {weekDays.map((weekDays, index) => (
        <Week
          key={`${selectedMonth.year}-${selectedMonth.monthNumber}-${index}`}
          weekDays={weekDays}
          selectedMonth={selectedMonth}
          rows={rows}
          reminders={reminders ?? []}
          onChangeDirection={onChangeDirection}
        />
      ))}
    </div>
  );
};

export { Month };
