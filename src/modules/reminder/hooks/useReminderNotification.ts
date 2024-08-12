/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useRealTime } from "~/modules/core/hooks/useRealTime";

const useReminderNotification = (userId?: string) => {
  const onNotification = (data: unknown) => {
    console.log("Enviando recordatorio ahora", data);
  };

  useEffect(() => {
    if (userId) {
      useRealTime({
        channelName: `user-${userId}`,
        eventName: "reminder-sent",
        callback: onNotification,
      });
    }
  }, [userId]);
};

export { useReminderNotification };
