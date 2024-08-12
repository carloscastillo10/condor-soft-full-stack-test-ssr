import { emit } from "~/modules/core/services";
import { type ReminderNotificationEvent } from "../types";

const emitReminderNotificationEvent = async ({
  userId,
  reminderTitle,
  reminderStart,
}: ReminderNotificationEvent) => {
  await emit({
    channel: `user-${userId.toString()}`,
    event: "reminder-sent",
    data: { reminderTitle, reminderStart },
  });
};

export { emitReminderNotificationEvent };
