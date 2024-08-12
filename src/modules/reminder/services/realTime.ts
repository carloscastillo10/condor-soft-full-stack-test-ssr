import { emit } from "~/modules/core/services";
import { type ReminderNotificationEvent } from "../types";

const emitReminderNotificationEvent = async ({
  userId,
  reminderTitle,
}: ReminderNotificationEvent) => {
  await emit({
    channel: `user-${userId.toString()}`,
    event: "reminder-sent",
    data: { reminderTitle },
  });
};

export { emitReminderNotificationEvent };
