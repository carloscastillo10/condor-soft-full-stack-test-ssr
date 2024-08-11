import { hexToRgba } from "~/modules/core/lib/utils";
import { type ReminderShortItemProps } from "./types";

const ReminderShortItem = ({ reminder, ...props }: ReminderShortItemProps) => (
  <li
    className="cursor-pointer overflow-hidden text-ellipsis text-nowrap rounded-lg border-2 border-dashed px-1 py-0.5 text-center text-xs font-semibold"
    style={{
      borderColor: reminder.color,
      color: reminder.color,
      backgroundColor: hexToRgba(reminder.color, 0.2),
    }}
    {...props}
  >
    {reminder.title}
  </li>
);

export { ReminderShortItem };
