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
