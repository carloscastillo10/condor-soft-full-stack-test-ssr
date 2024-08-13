import { useMemo } from "react";
import { ReminderItem } from "../reminder-item";
import { ReminderLargeList } from "../reminder-large-list";
import { type ReminderShortListProps } from "./types";

const ReminderShortList = ({
  day,
  reminders,
  rows,
  ...props
}: ReminderShortListProps) => {
  const maxCountRemindersInDay = useMemo(() => (rows === 6 ? 3 : 4), [rows]);
  const isShowMoreButton = useMemo(
    () => reminders.length > maxCountRemindersInDay,
    [reminders.length, maxCountRemindersInDay],
  );

  const restCountReminders = useMemo(
    () => (isShowMoreButton ? reminders.length - maxCountRemindersInDay : 0),
    [isShowMoreButton, reminders.length, maxCountRemindersInDay],
  );

  return (
    <div className="flex flex-col gap-1" {...props}>
      <ul className="flex h-max w-full flex-col gap-1 overflow-hidden">
        {reminders.slice(0, maxCountRemindersInDay).map((reminder) => (
          <ReminderItem key={reminder.id} reminder={reminder} />
        ))}
      </ul>
      {isShowMoreButton && (
        <ReminderLargeList
          day={day}
          restCountReminders={restCountReminders}
          reminders={reminders}
        />
      )}
    </div>
  );
};

export { ReminderShortList };
