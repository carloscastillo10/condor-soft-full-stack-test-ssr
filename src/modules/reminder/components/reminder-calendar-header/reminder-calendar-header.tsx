import { TooltipArrow, TooltipTrigger } from "@radix-ui/react-tooltip";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Calendar } from "~/modules/core/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/modules/core/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "~/modules/core/components/ui/tooltip";
import { type ReminderCalendarHeaderProps } from "./types";

const ReminderCalendarHeader = ({
  selectedDay,
  displayedDate,
  onChangeDirection,
  ...props
}: ReminderCalendarHeaderProps) => (
  <div
    className="flex justify-between rounded-md border border-primary-light px-4 py-3"
    {...props}
  >
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger
          className="rounded-full p-2 hover:bg-slate-100"
          onClick={() => onChangeDirection("left")}
        >
          <FaAngleLeft className="h-5 w-5" />
        </TooltipTrigger>
        <TooltipContent
          className="border-primary bg-primary text-xs font-semibold text-white"
          side="bottom"
        >
          Mes anterior
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <Popover>
      <PopoverTrigger className="rounded-md p-2 font-semibold capitalize hover:bg-slate-100">
        {displayedDate}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDay.date}
          onDayClick={(day) => {
            onChangeDirection("custom", day);
          }}
          initialFocus
          classNames={{
            day_selected:
              "text-white bg-primary/60 hover:bg-primary/60 hover:text-white",
            day_today: "text-white !bg-primary hover:text-white",
            day_outside:
              "aria-selected:bg-primary/60 text-gray-400 aria-selected:text-white",
          }}
        />
      </PopoverContent>
    </Popover>
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger
          className="rounded-full p-2 hover:bg-slate-100"
          onClick={() => onChangeDirection("right")}
        >
          <FaAngleRight className="h-5 w-5" />
        </TooltipTrigger>
        <TooltipContent
          className="border-primary bg-primary text-xs font-semibold text-white"
          side="bottom"
        >
          Mes siguiente
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

export { ReminderCalendarHeader };
