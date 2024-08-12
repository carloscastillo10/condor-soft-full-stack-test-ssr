import { type ReminderNotification } from "../types";

const sendReminderEmailNotification = async ({
  title,
  start,
  email,
}: ReminderNotification) => {
  console.log("enviando notification por correo", title, start, email);
  // await sendEmail({from: 'castillocarlos2407@gmail.com', subject: 'Reminder', to, template: <ReminderEmailNotification />})
};

export { sendReminderEmailNotification };
