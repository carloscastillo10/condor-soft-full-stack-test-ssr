import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
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
    console.log(data);
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
