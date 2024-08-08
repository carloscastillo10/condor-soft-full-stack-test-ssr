import { type DayProps } from "./types";

const Day = ({ day, rows, ...props }: DayProps) => {
  return (
    <div
      className="flex h-full w-full flex-col items-center border border-r-primary-light"
      {...props}
    >
      {day.dayNumber}
    </div>
  );
};

export { Day };
