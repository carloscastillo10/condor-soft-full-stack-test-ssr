import { cn } from "~/modules/core/lib/utils";
import { checkIsToday } from "~/modules/reminder/utils/calendar";
import { type DayProps } from "./types";

const Day = ({ day, selectedMonth, rows, ...props }: DayProps) => {
  return (
    <div
      className="flex h-full w-full flex-col border border-r-primary-light p-2"
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
    </div>
  );
};

export { Day };
