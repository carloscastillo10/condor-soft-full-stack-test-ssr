export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface Reminder {
  id: number;
  title: string;
  startDate: Date;
  color: string;
}

export type ErrorResponse = {
  message: string;
};
