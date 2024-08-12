import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate, type ReminderFormData } from "../types";
import { parseDateTimeToDateTime } from "../utils/date";
import { generateRandomId } from "../utils/random";
import { createReminderSchema } from "../utils/validation";

const useCreateReminder = (selectedDay: ReminderCalendarDate) => {
  const form = useForm<ReminderFormData>({
    defaultValues: {
      title: "",
      date: selectedDay.date,
      time: `${selectedDay.hours}:${selectedDay.minutes}`,
      color: "#0F172A",
    },
    resolver: zodResolver(createReminderSchema),
  });
  const queryClient = useQueryClient();

  const create = async (data: ReminderFormData): Promise<Reminder> => {
    const response = await fetch("/api/reminders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });

    if (!response.ok) {
      console.log(await response.json());
      throw new Error("Failed to create reminder.");
    }

    const newReminder = (await response.json()) as Reminder;

    return newReminder;
  };

  const {
    mutate: createReminder,
    status,
    error,
  } = useMutation({
    mutationFn: create,
    onMutate: async (newReminder) => {
      await queryClient.cancelQueries({ queryKey: ["reminders"] });

      const previousReminders = queryClient.getQueryData<Reminder[]>([
        "reminders",
      ]);
      const tempoId = generateRandomId();
      const newReminderToAdd: Reminder = {
        id: tempoId,
        title: newReminder.title,
        start: parseDateTimeToDateTime(newReminder.date, newReminder.time),
        color: newReminder.color,
      };

      queryClient.setQueryData<Reminder[]>(["reminders"], (oldData = []) => {
        return [...oldData, newReminderToAdd];
      });

      return previousReminders;
    },
    onSuccess: (newReminder) => {
      // Update assigned id in db
      queryClient.setQueryData<Reminder[]>(["reminders"], (oldData = []) => {
        return oldData.map((reminder) =>
          reminder.id === newReminder.id
            ? { ...reminder, ...newReminder }
            : reminder,
        );
      });
    },
    onError: (_, __, context) => {
      const previousReminders = context;

      if (previousReminders) {
        queryClient.setQueryData<Reminder[]>(["reminders"], previousReminders);
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["reminders"] });
    },
  });

  return {
    state: {
      form,
      isLoading: status === "pending",
      error,
    },
    functions: {
      createReminder,
    },
  };
};

export { useCreateReminder };
