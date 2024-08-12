/* eslint-disable @typescript-eslint/no-empty-function */
import { create } from "zustand";
import {
  type CreateReminderModalState,
  type ReminderCalendarDate,
  type ReminderCalendarDirection,
} from "../types";
import { createDate } from "../utils/calendar";

const useCreateReminderModalStore = create<CreateReminderModalState>((set) => ({
  isOpen: false,
  selectedDay: createDate(new Date()),
  openModal: (
    day: ReminderCalendarDate,
    onChangeDirection: (
      direction: ReminderCalendarDirection,
      customDate?: Date,
    ) => void,
  ) => set({ isOpen: true, selectedDay: day, onChangeDirection }),
  closeModal: () => set({ isOpen: false }),
  onChangeDirection: () => {},
}));

export { useCreateReminderModalStore };
