import { type z } from "zod";
import { type Reminder, type User } from "../core/types";
import { type createReminderSchema } from "./utils/validation";

export interface ReminderCalendarDate {
  date: Date;
  seconds: number;
  minutes: number;
  hours: number;
  dayNumber: number;
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
  year: number;
  yearShort: string;
  month: string;
  monthShort: string;
  monthNumber: number;
  monthIndex: number;
  timestamp: number;
}

export interface Month {
  date: Date;
  getDay: (
    year: number,
    monthIndex: number,
    dayNumber: number,
    locale: string,
  ) => {
    date: Date;
    year: number;
    month: string;
    monthShort: string;
    monthIndex: number;
    day: string;
    dayShort: string;
    dayNumber: number;
    dayNumberInWeek: number;
  };
  monthName: string;
  monthIndex: number;
  monthNumber: number;
  year: number;
  createMonthDays: () => Array<{
    date: Date;
    year: number;
    month: string;
    monthShort: string;
    monthIndex: number;
    day: string;
    dayShort: string;
    dayNumber: number;
    dayNumberInWeek: number;
  }>;
}

export interface WeekDayName {
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
}

export interface ModalPosition {
  top: number;
  left: number;
}

export type ReminderCalendarDirection = "today" | "left" | "right" | "custom";
export type ReminderFormData = z.infer<typeof createReminderSchema>;

export interface CreateReminder extends ReminderFormData {
  userId: number;
}

export interface QueryReminder {
  userId: number;
  from: Date;
  to: Date;
}

export interface ReminderNotification
  extends Pick<Reminder, "title" | "start">,
    Pick<User, "email"> {}

export interface ReminderNotificationEvent {
  userId: number;
  reminderTitle: string;
}

export interface CreateReminderNotification {
  reminderId: number;
  scheduleId: string;
}

export interface QueryNotification {
  reminderId: number;
}
