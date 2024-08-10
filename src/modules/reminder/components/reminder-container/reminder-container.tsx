import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/modules/core/components/ui/dropdown-menu";
import { ReminderCalendar } from "../reminder-calendar";
import { type ReminderContainerProps } from "./types";

const ReminderContainer = ({ ...props }: ReminderContainerProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const onSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/auth/signin");
  };

  return (
    <Card
      className="container flex h-full w-full flex-col gap-4 rounded-md border border-primary-light p-6"
      {...props}
    >
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl font-semibold">Schedule</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={session?.user?.name ?? "user avatar"}
                />
                <AvatarFallback>
                  {session?.user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer text-sm font-semibold hover:bg-slate-100"
                onClick={onSignOut}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="h-full p-0">
        <ReminderCalendar />
      </CardContent>
    </Card>
  );
};

export { ReminderContainer };
