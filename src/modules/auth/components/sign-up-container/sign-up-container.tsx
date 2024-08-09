import { TooltipArrow } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/modules/core/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/modules/core/components/ui/tooltip";
import { SignUpForm } from "../sign-up-form";
import { type SignUpContainerProps } from "./types";

const SignUpContainer = ({ ...props }: SignUpContainerProps) => (
  <Card
    className="grid w-full max-w-full gap-2.5 rounded-md border border-primary-light px-6 py-8 md:max-w-md"
    {...props}
  >
    <div className="grid animate-form gap-4">
      <CardHeader className="gap-1.5 p-0">
        <CardTitle className="flex items-center gap-2 text-3xl">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="rounded-full p-2 hover:bg-slate-100"
                  href="/auth/signin"
                  title="Back"
                >
                  <FaArrowLeft className="h-6 w-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="border-primary bg-primary text-white">
                Back
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          New Account
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <SignUpForm />
      </CardContent>
      <CardFooter className="p-0">
        <div className="flex w-full flex-col items-center gap-1.25">
          <Link
            className="transform text-base font-medium hover:underline"
            href="/auth/signin"
          >
            Log In
          </Link>
        </div>
      </CardFooter>
    </div>
  </Card>
);

export { SignUpContainer };
