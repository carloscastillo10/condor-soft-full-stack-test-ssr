import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate } from "../types";

const useListReminder = ({
  from,
  to,
}: {
  from: ReminderCalendarDate;
  to: ReminderCalendarDate;
}) => {
  const list = async () => {
    const startDate = format(from.date, "yyyy-MM-dd");
    const endDate = format(to.date, "yyyy-MM-dd");
    const response = await fetch(
      `/api/reminders?from=${startDate}&to=${endDate}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to get reminders.");
    }

    const reminders = (await response.json()) as Reminder[];

    return reminders.map((reminder) => ({
      ...reminder,
      start: new Date(reminder.start),
    }));
  };

  const {
    data: reminders,
    isLoading,
    isFetching,
    error,
  } = useQuery<Reminder[]>({
    queryKey: ["reminders", from, to],
    queryFn: list,
    placeholderData: keepPreviousData,
  });

  return {
    state: {
      reminders,
      isLoading: isLoading || isFetching,
      error,
    },
  };
};

export { useListReminder };
