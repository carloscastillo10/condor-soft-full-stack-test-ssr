import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/modules/core/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/modules/core/components/ui/card";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/modules/core/components/ui/dropdown-menu";
import { ReminderCalendar } from "../reminder-calendar";
import { type ReminderContainerProps } from "./types";

const ReminderContainer = ({ ...props }: ReminderContainerProps) => {
  const { data: session, status } = useSession();

  return (
    <Card
      className="grid w-full max-w-full gap-4 rounded-md border border-primary-light p-6"
      {...props}
    >
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl font-semibold">Schedule</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={session?.user?.name ?? "user avatar"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer text-sm font-semibold hover:bg-slate-100">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ReminderCalendar />
      </CardContent>
    </Card>
  );
};

export { ReminderContainer };
