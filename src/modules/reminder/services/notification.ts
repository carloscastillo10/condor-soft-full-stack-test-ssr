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

const sendReminderEmailNotification = async ({
  title,
  start,
  email,
}: ReminderNotification) => {
  console.log("enviando notification por correo", title, start, email);
  // await sendEmail({from: 'castillocarlos2407@gmail.com', subject: 'Reminder', to, template: <ReminderEmailNotification />})
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
