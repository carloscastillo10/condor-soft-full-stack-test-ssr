import { useMemo } from "react";
import { Button } from "~/modules/core/components/ui/button";
import { ReminderShortItem } from "../reminder-short-item";
import { type ReminderShortListProps } from "./types";

const ReminderShortList = ({
  reminders,
  rows,
  ...props
}: ReminderShortListProps) => {
  const maxCountRemindersInDay = useMemo(() => (rows === 6 ? 3 : 4), [rows]);
  const isShowMoreButton = useMemo(
    () => reminders.length > maxCountRemindersInDay,
    [reminders.length, maxCountRemindersInDay],
  );
  const maxCountDayReminders = useMemo(
    () =>
      isShowMoreButton ? maxCountRemindersInDay - 1 : maxCountRemindersInDay,
    [isShowMoreButton, maxCountRemindersInDay],
  );
  const restCountReminders = useMemo(
    () => (isShowMoreButton ? reminders.length - maxCountDayReminders : 0),
    [reminders.length, isShowMoreButton, maxCountDayReminders],
  );

  return (
    <div className="flex flex-col gap-1" {...props}>
      <ul className="flex h-max w-full flex-col gap-1 overflow-hidden">
        {reminders.slice(0, maxCountRemindersInDay).map((reminder) => (
          <ReminderShortItem key={reminder.id} reminder={reminder} />
        ))}
      </ul>
      {isShowMoreButton && (
        <Button className="h-max justify-start overflow-hidden text-ellipsis text-nowrap bg-transparent px-1 py-0.5 text-xs font-semibold text-primary hover:bg-primary-light">
          {`${restCountReminders} more`}
        </Button>
      )}
    </div>
  );
};

export { ReminderShortList };
