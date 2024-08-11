import { useMemo, type MouseEvent } from "react";
import { cn } from "~/modules/core/lib/utils";
import { useCreateReminderModal } from "~/modules/reminder/hooks/useCreateReminderModal";
import { checkIsToday } from "~/modules/reminder/utils/calendar";
import { filterRemindersByDate } from "~/modules/reminder/utils/filters";
import { AddReminderModal } from "../../../add-reminder-modal";
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
  const { state, functions } = useCreateReminderModal();
  const dayReminders = useMemo(
    () => filterRemindersByDate(reminders, day),
    [reminders, day],
  );

  const onSelectDay = (event: MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    functions.setIsOpenModal(true);
    functions.adjustModalPosition({ top: rect.bottom, left: rect.left });
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
        <ReminderShortList rows={rows} reminders={dayReminders} />
      </div>
      <AddReminderModal
        modalRef={state.modalRef}
        isOpen={state.isOpenModal}
        selectedDay={day}
        setIsOpen={functions.setIsOpenModal}
        onChangeDirection={onChangeDirection}
        // style={{
        //   position: "absolute",
        //   top: state.modalPosition?.top,
        //   left: state.modalPosition?.left,
        // }}
      />
    </>
  );
};

export { Day };
