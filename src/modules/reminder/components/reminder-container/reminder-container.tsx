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
import { Card, CardHeader, CardTitle } from "~/modules/core/components/ui/card";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/modules/core/components/ui/dropdown-menu";
import { type ReminderContainerProps } from "./types";

const ReminderContainer = ({ ...props }: ReminderContainerProps) => {
  const { data: session, status } = useSession();

  return (
    <Card
      className="grid w-full max-w-full gap-4 rounded-md border border-primary-light p-6"
      {...props}
    >
      <CardHeader className="p-0">
        <div className="flex justify-between">
          <CardTitle className="text-3xl font-semibold">Schedule</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={session?.user?.name}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-sm font-semibold">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
    </Card>
  );
};

export { ReminderContainer };
