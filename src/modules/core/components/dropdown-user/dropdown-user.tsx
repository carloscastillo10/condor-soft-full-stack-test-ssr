import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";
import { type DropDownUserProps } from "./types";

const DropdownUser = ({ userName, isLoading, ...props }: DropDownUserProps) => {
  const router = useRouter();

  const onSignOut = async () => {
    await signOut({ redirect: false });
    toast.dismiss();
    router.push("/auth/signin");
  };

  return (
    <>
      {isLoading ? (
        <Skeleton className="h-12 w-12 rounded-full bg-primary-light" />
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt={userName ?? "user avatar"}
              />
              <AvatarFallback>
                {userName?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" {...props}>
            <DropdownMenuItem
              className="cursor-pointer text-sm font-semibold hover:bg-slate-100"
              onClick={onSignOut}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export { DropdownUser };
