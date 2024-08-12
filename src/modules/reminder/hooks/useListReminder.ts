import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate } from "../types";

const useListReminder = ({
  from,
  to,
}: {
  from: ReminderCalendarDate;
  to: ReminderCalendarDate;
}) => {
  const toastIdRef = useRef<string | number | null>(null);

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

  useEffect(() => {
    if ((isLoading || isFetching) && !toastIdRef.current) {
      toastIdRef.current = toast.loading("Loading reminders", {
        className: "bg-black text-white font-semibold",
        position: "bottom-center",
      });
    } else if (!isLoading && toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
      toastIdRef.current = null;
    }
  }, [isLoading, isFetching]);

  return {
    state: {
      reminders,
      isLoading: isLoading || isFetching,
      error,
    },
  };
};

export { useListReminder };
