import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { type ErrorResponse } from "~/modules/core/types";
import { type ReminderCalendarDate, type ReminderFormData } from "../types";
import { createReminderSchema } from "../utils/validation";

const useReminder = (selectedDay: ReminderCalendarDate) => {
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
      const { message } = (await response.json()) as ErrorResponse;
      console.log("errror:", message);
    }
  };

  const { mutate, status, error } = useMutation({ mutationFn: create });

  return {
    state: {
      form,
      isLoading: status === "pending",
      error,
    },
    functions: {
      createReminder: mutate,
    },
  };
};

export { useReminder };
