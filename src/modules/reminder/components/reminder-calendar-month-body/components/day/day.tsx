import { useMemo } from "react";
import { cn } from "~/modules/core/lib/utils";
import { useCreateReminderModalStore } from "~/modules/reminder/store/useCreateReminderModalStore";
import { checkIsToday } from "~/modules/reminder/utils/calendar";
import { filterRemindersByDate } from "~/modules/reminder/utils/filters";
import { ReminderShortList } from "../../../reminder-short-list";
import { type DayProps } from "./types";

const Day = ({
  day,
  selectedMonth,
  rows,
  reminders,
  onChangeDirection,
  ...props
}: DayProps) => {
  const { openModal } = useCreateReminderModalStore();
  const dayReminders = useMemo(
    () => filterRemindersByDate(reminders, day),
    [reminders, day],
  );

  const onSelectDay = () => {
    openModal(day, onChangeDirection);
  };

  return (
    <>
      <div
        className="flex h-full w-full flex-col gap-2.5 border border-r-primary-light p-2"
        onClick={onSelectDay}
        {...props}
      >
        <p
          className={cn(
            checkIsToday(day.date)
              ? "underline decoration-primary"
              : selectedMonth.monthIndex !== day.monthIndex
                ? "text-secondary opacity-70"
                : "text-secondary opacity-100",
            "text-xs font-medium",
          )}
        >
          {day.dayNumber}
        </p>
        <ReminderShortList day={day} rows={rows} reminders={dayReminders} />
      </div>
    </>
  );
};

export { Day };
