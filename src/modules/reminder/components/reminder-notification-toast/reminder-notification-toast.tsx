import { type ReminderNotificationToastProps } from "./types";

const ReminderNotificationToast = ({
  toastId,
  ...props
}: ReminderNotificationToastProps) => (
  <div {...props}>Enviando notificacion ahora</div>
);

export { ReminderNotificationToast };
