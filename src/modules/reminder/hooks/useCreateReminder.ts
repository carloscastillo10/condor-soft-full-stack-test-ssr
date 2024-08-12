import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { convertToTwoDigitFormat } from "~/modules/core/lib/utils";
import { type Reminder } from "~/modules/core/types";
import { type ReminderCalendarDate, type ReminderFormData } from "../types";
import { createDate } from "../utils/calendar";
import { parseDateTimeToDateTime } from "../utils/date";
import { generateRandomId } from "../utils/random";
import { createReminderSchema } from "../utils/validation";

const useCreateReminder = ({
  selectedDay,
  closeModal,
}: {
  selectedDay: ReminderCalendarDate;
  closeModal: () => void;
}) => {
  const { hours, minutes } = createDate(new Date());
  const form = useForm<ReminderFormData>({
    defaultValues: {
      title: "",
      date: selectedDay.date,
      time: `${convertToTwoDigitFormat(hours)}:${convertToTwoDigitFormat(minutes)}`,
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

      // For rollback is necessary
      return previousReminders;
    },
    onSuccess: async (newReminder) => {
      // Update assigned id in db
      queryClient.setQueryData<Reminder[]>(["reminders"], (oldData = []) => {
        return oldData.map((reminder) =>
          reminder.id === newReminder.id
            ? { ...reminder, ...newReminder }
            : reminder,
        );
      });

      toast.success("Reminder successfully created", {
        className: "bg-emerald-500 border-emerald-500 font-semibold",
        position: "top-center",
        duration: 3000,
      });

      closeModal();
    },
    onError: (_, __, context) => {
      const previousReminders = context;

      if (previousReminders) {
        queryClient.setQueryData<Reminder[]>(["reminders"], previousReminders);
      }

      toast.error("Error when scheduling reminder", {
        className: "bg-red-500 border-red-500 font-semibold",
        position: "top-center",
        duration: 3000,
      });
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
