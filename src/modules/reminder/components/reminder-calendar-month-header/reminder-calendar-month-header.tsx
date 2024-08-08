import { type ReminderCalendarMonthHeader } from "./types";

const ReminderCalendarMonthHeader = ({
  weekDaysNames,
  ...props
}: ReminderCalendarMonthHeader) => (
  <div {...props}>
    <ul className="grid grid-cols-7 place-items-center gap-2">
      {weekDaysNames.map((weekDay) => (
        <li
          key={weekDay.dayNumberInWeek}
          className="text-secondary w-max max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium"
        >
          {weekDay.day}
        </li>
      ))}
    </ul>
  </div>
);

export { ReminderCalendarMonthHeader };
