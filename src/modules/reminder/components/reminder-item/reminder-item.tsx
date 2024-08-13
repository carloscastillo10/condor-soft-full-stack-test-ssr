import { PopoverArrow } from "@radix-ui/react-popover";
import { BiSolidSquareRounded } from "react-icons/bi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/modules/core/components/ui/popover";
import { hexToRgba } from "~/modules/core/lib/utils";
import { formatDateToNotificationDate } from "../../utils/date";
import { type ReminderItemProps } from "./types";

const ReminderItem = ({ reminder, ...props }: ReminderItemProps) => {
  console.log(reminder);
  return (
    <Popover {...props}>
      <PopoverTrigger
        className="cursor-pointer overflow-hidden text-ellipsis text-nowrap rounded-lg border-2 border-dashed px-1 py-0.5 text-center text-xs font-semibold"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          borderColor: reminder.color,
          color: reminder.color,
          backgroundColor: hexToRgba(reminder.color, 0.2),
        }}
      >
        {reminder.title}
      </PopoverTrigger>
      <PopoverContent
        className="rounded-md border border-primary-light bg-white shadow-modal"
        side="right"
        align="center"
      >
        <PopoverArrow className="fill-white" />
        <div className="flex gap-4">
          <BiSolidSquareRounded
            className="h-5 w-5"
            style={{ fill: reminder.color }}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              {reminder.title}
            </h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {formatDateToNotificationDate(reminder.start)}
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { ReminderItem };
