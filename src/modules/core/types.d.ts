import { type BodyInit } from "@upstash/qstash";

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface Reminder {
  id: number;
  title: string;
  start: Date;
  color: string;
  user?: User;
}

export type ErrorResponse = {
  message: string;
};

export interface Job {
  destination: string;
  cron: string;
  body: BodyInit;
}

export interface Email {
  from: string;
  to: string[];
  subject: string;
  template: JSX.Element;
}

export interface Trigger {
  channel: string;
  event: string;
  data: unknown;
}

export type NotificationStatus = "pending" | "sent";

export interface Notification {
  id: number;
  reminderId: number;
  scheduleId: string;
  status: NotificationStatus;
}

export type UpdateNotification = Required<Pick<Notification, "id">> &
  Partial<Pick<Notification, "status">>;

export type EmailNotificationRequestBody = Required<Omit<Reminder, "color">>;
