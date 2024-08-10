import { Day } from "../day";
import { type WeekProps } from "./types";

const Week = ({
  selectedMonth,
  weekDays,
  rows,
  onChangeDirection,
  ...props
}: WeekProps) => (
  <div className="grid h-full w-full grid-cols-7 place-items-center" {...props}>
    {weekDays.map((day) => (
      <Day
        key={`${selectedMonth.year}-${selectedMonth.monthNumber}-${day.dayNumber}`}
        selectedMonth={selectedMonth}
        day={day}
        rows={rows}
        onChangeDirection={onChangeDirection}
      />
    ))}
  </div>
);

export { Week };
