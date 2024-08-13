import { TooltipArrow } from "@radix-ui/react-tooltip";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Calendar } from "~/modules/core/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/modules/core/components/ui/popover";
import { Skeleton } from "~/modules/core/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/modules/core/components/ui/tooltip";
import { type ReminderCalendarHeaderProps } from "./types";

const ReminderCalendarHeader = ({
  isLoading,
  selectedDay,
  displayedDate,
  onChangeDirection,
  ...props
}: ReminderCalendarHeaderProps) => {
  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);

  const onSelectDay = (day: Date) => {
    setIsOpenPopover(false);
    onChangeDirection("custom", day);
  };

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-12 w-full bg-primary-light" />
      ) : (
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
          <Popover open={isOpenPopover} onOpenChange={setIsOpenPopover}>
            <PopoverTrigger
              className="rounded-md p-2 font-semibold capitalize hover:bg-slate-100"
              onClick={() => setIsOpenPopover(!isOpenPopover)}
            >
              {displayedDate}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDay.date}
                defaultMonth={selectedDay.date}
                onDayClick={(day) => onSelectDay(day)}
                initialFocus
                classNames={{
                  day_selected:
                    "text-white bg-primary/60 hover:!bg-primary/60 hover:text-white",
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
      )}
    </>
  );
};

export { ReminderCalendarHeader };
