import { format } from "date-fns";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { LuLoader2 } from "react-icons/lu";
import { Button } from "~/modules/core/components/ui/button";
import { Calendar } from "~/modules/core/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/modules/core/components/ui/form";
import { Input } from "~/modules/core/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/modules/core/components/ui/popover";
import { cn } from "~/modules/core/lib/utils";
import { useCreateReminder } from "../../hooks/useCreateReminder";
import { type ReminderFormData } from "../../types";
import { type AddReminderFormProps } from "./types";

const AddReminderForm = ({
  selectedDay,
  onChangeDirection,
  closeModal,
  ...props
}: AddReminderFormProps) => {
  const {
    state: { form, isLoading, error },
    functions: { createReminder },
  } = useCreateReminder({
    selectedDay,
    closeModal,
  });
  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);

  const onSelectDate = (day: Date) => {
    setIsOpenPopover(false);
    onChangeDirection("custom", day);
  };

  const onSubmit = (data: ReminderFormData) => {
    createReminder(data);
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.title
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-primary-light",
                    "rounded-md border bg-white py-2 pl-3 pr-14 focus-visible:ring-offset-0",
                  )}
                  type="text"
                  placeholder="Event Title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex w-full items-center justify-between gap-4 space-y-0">
              <FormLabel
                className={cn(
                  form.formState.errors.date ? "text-red-500" : "text-primary",
                  "text-base font-semibold",
                )}
              >
                Date
              </FormLabel>
              <Popover open={isOpenPopover} onOpenChange={setIsOpenPopover}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className={cn(
                        !field.value && "text-muted-foreground",
                        isOpenPopover
                          ? "border-2 border-primary"
                          : "border border-primary-light",
                        "w-[240px] text-left font-medium hover:bg-transparent",
                      )}
                      variant="outline"
                      onClick={() => setIsOpenPopover(!isOpenPopover)}
                    >
                      {field.value ? format(field.value, "P") : "Event Date"}
                      <CiCalendar className="ml-auto h-5 w-5 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    defaultMonth={field.value}
                    onSelect={field.onChange}
                    onDayClick={(day) => onSelectDate(day)}
                    initialFocus
                    classNames={{
                      day_selected:
                        "text-white bg-primary/60 hover:!bg-primary/60 hover:text-white",
                      day_today: "text-white !bg-primary hover:text-white",
                      day_outside:
                        "aria-selected:bg-primary/60 text-gray-400 aria-selected:text-white",
                    }}
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <div className="flex w-full items-center justify-between gap-4 space-y-0">
                <FormLabel
                  className={cn(
                    form.formState.errors.time
                      ? "text-red-500"
                      : "text-primary",
                    "text-base font-semibold",
                  )}
                >
                  Time
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      form.formState.errors.time
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-primary-light",
                      "w-[240px] rounded-md border bg-white py-2 pl-3 pr-14 focus-visible:ring-offset-0",
                    )}
                    type="text"
                    placeholder="00:00 AM"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="flex w-full items-center justify-between gap-4 space-y-0">
              <FormLabel
                className={cn(
                  form.formState.errors.color ? "text-red-500" : "text-primary",
                  "text-base font-semibold",
                )}
              >
                Color
              </FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.color
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-primary-light",
                    "w-[240px] rounded-md border bg-white py-2 pl-3 pr-14 focus-visible:ring-offset-0",
                  )}
                  type="color"
                  placeholder="#0F172A"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <LuLoader2 className="h-6 w-6 animate-spin" /> : "Save"}
        </Button>
      </form>
    </Form>
  );
};

export { AddReminderForm };
