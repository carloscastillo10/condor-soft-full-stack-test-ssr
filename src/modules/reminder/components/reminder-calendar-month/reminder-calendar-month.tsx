import { useEffect, useRef } from "react";
import { Skeleton } from "~/modules/core/components/ui/skeleton";
import { getAnimation } from "../../utils/animation";
import { ReminderCalendarMonthBody } from "../reminder-calendar-month-body";
import { ReminderCalendarMonthHeader } from "../reminder-calendar-month-header";
import { type ReminderCalendarMonthProps } from "./types";

const ReminderCalendarMonth = ({
  isLoading,
  direction,
  selectedDay,
  lastSelectedDay,
  selectedMonth,
  weekDaysNames,
  daysOfMonth,
  numberOfWeekDays,
  onChangeDirection,
  ...props
}: ReminderCalendarMonthProps) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = getAnimation(direction, selectedDay, lastSelectedDay);
    const calendarElement = calendarRef.current;

    if (calendarElement) {
      calendarElement.classList.add(animation);

      const timeoutId = setTimeout(() => {
        calendarElement.classList.remove(animation);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        calendarElement.classList.remove(animation);
      };
    }
  }, [direction, lastSelectedDay, selectedDay]);

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-full w-full bg-primary-light" />
      ) : (
        <div
          ref={calendarRef}
          className="flex h-full flex-col gap-2"
          {...props}
        >
          <ReminderCalendarMonthHeader weekDaysNames={weekDaysNames} />
          <ReminderCalendarMonthBody
            selectedMonth={selectedMonth}
            daysOfMonth={daysOfMonth}
            numberOfWeekDays={numberOfWeekDays}
            onChangeDirection={onChangeDirection}
          />
        </div>
      )}
    </>
  );
};

export { ReminderCalendarMonth };
