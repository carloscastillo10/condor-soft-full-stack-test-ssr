import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate, type ReminderFormData } from "../types";
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

  const create = async (data: ReminderFormData) => {
    const response = await fetch("/api/reminders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });

    if (!response.ok) {
      throw new Error("Failed to create reminder.");
    }

    const newReminder = (await response.json()) as Reminder;
    console.log("addNewReminder:", newReminder);

    return newReminder;
  };

  const {
    mutate: createReminder,
    status,
    error,
  } = useMutation({ mutationFn: create });

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
