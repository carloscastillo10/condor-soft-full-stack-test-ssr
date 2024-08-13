import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/modules/core/components/ui/dialog";
import { ReminderItem } from "../reminder-item";
import { type ReminderLargeListProps } from "./types";

const ReminderLargeList = ({
  day,
  restCountReminders,
  reminders,
  ...props
}: ReminderLargeListProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger
        className="cursor-pointer overflow-hidden text-ellipsis text-nowrap rounded-lg px-1 py-0.5 text-start text-xs font-semibold text-primary hover:bg-primary-light"
        onClick={(e) => e.stopPropagation()}
      >{`${restCountReminders} more`}</DialogTrigger>
      <DialogContent className="max-w-md gap-3 rounded-md border border-primary-light bg-white p-4 shadow-modal lg:max-w-lg">
        <DialogHeader className="items-center">
          <DialogTitle className="text-xs font-semibold uppercase text-secondary">
            {day.day}
          </DialogTitle>
          <DialogDescription className="text-2xl font-semibold text-primary">
            {day.dayNumber}
          </DialogDescription>
        </DialogHeader>
        <ul className="flex h-max w-full flex-col gap-1 overflow-hidden">
          {reminders.map((reminder) => (
            <ReminderItem key={reminder.id} reminder={reminder} />
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export { ReminderLargeList };
