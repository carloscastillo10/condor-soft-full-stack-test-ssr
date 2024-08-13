import { type ReminderEmailNotificationProps } from "./types";

const ReminderEmailNotification = ({
  ...props
}: ReminderEmailNotificationProps) => (
  <div {...props}>
    <h1>Reminder</h1>
  </div>
);

export { ReminderEmailNotification };
