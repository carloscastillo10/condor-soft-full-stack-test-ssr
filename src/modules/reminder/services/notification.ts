import { sendEmail } from "~/modules/core/services";
import {
  type Notification,
  type NotificationStatus,
  type UpdateNotification,
} from "~/modules/core/types";
import { db } from "~/server/db";
import {
  type CreateReminderNotification,
  type QueryNotification,
  type ReminderNotification,
} from "../types";
import { formatDateToNotificationDate } from "../utils/date";

const sendReminderEmailNotification = async ({
  title,
  start,
  name,
  email,
}: ReminderNotification) => {
  await sendEmail({
    to: [email],
    subject: "Reminder Notification",
    templatePath: "src/modules/reminder/templates/reminder-template-email.ejs",
    data: {
      name,
      title,
      start: formatDateToNotificationDate(start),
    },
  });
};

const saveNotification = async ({
  reminderId,
  scheduleId,
}: CreateReminderNotification) => {
  await db.notification.create({
    data: {
      reminderId,
      scheduleId,
    },
  });
};

const findNotification = async (
  query: QueryNotification,
): Promise<Notification | null> => {
  const { reminderId } = query;

  const notification = await db.notification.findFirst({
    where: { reminderId },
  });

  if (notification) {
    return {
      id: notification.id,
      reminderId: notification.reminderId,
      scheduleId: notification.scheduleId,
      status: notification.status as NotificationStatus,
    };
  }

  return null;
};

const updateNotification = async ({ id, ...changes }: UpdateNotification) => {
  await db.notification.update({ data: { ...changes }, where: { id } });
};

export {
  findNotification,
  saveNotification,
  sendReminderEmailNotification,
  updateNotification,
};
