import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FaBell } from "react-icons/fa";
import { toast } from "sonner";
import { DropdownUser } from "~/modules/core/components/dropdown-user";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/modules/core/components/ui/card";
import { Skeleton } from "~/modules/core/components/ui/skeleton";
import { useRealTime } from "~/modules/core/hooks/useRealTime";
import { type ReminderNotificationEvent } from "../../types";
import { ReminderCalendar } from "../reminder-calendar";
import { type ReminderContainerProps } from "./types";

const ReminderContainer = ({ ...props }: ReminderContainerProps) => {
  const { data: session, status } = useSession();
  const isLoading = useMemo(() => status === "loading", [status]);

  const onNotification = (data: unknown) => {
    const { reminderStart } = data as ReminderNotificationEvent;

    toast.message("Sending reminder now", {
      className: "bg-black text-white border-black shadow-modal",
      description: format(reminderStart, "EEEE, MMMM do 'at' h:mma"),
      icon: <FaBell className="mr-4 h-4 w-4" />,
      duration: 4000,
      position: "bottom-left",
    });
  };

  useRealTime({
    channelName: `user-${session?.user.id}`,
    eventName: "reminder-sent",
    callback: onNotification,
  });

  return (
    <Card
      className="container flex h-full w-full flex-col gap-4 rounded-md border border-primary-light p-6"
      {...props}
    >
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          {isLoading ? (
            <Skeleton className="h-6 w-28 bg-primary-light" />
          ) : (
            <CardTitle className="text-3xl font-semibold">Schedule</CardTitle>
          )}

          <DropdownUser userName={session?.user.name} isLoading={isLoading} />
        </div>
      </CardHeader>
      <CardContent className="h-full p-0">
        <ReminderCalendar isLoading={isLoading} />
      </CardContent>
    </Card>
  );
};

export { ReminderContainer };
