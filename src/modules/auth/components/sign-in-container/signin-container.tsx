import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/modules/core/components/ui/card";
import { SignInForm } from "../sign-in-form";
import { type SignInContainerProps } from "./types";

const SignInContainer = ({ ...props }: SignInContainerProps) => (
  <Card
    className="grid w-full max-w-full gap-2.5 rounded-md border border-primary-light px-6 py-8 md:max-w-md"
    {...props}
  >
    <div className="grid gap-4">
      <CardHeader className="gap-1.5 p-0">
        <CardTitle className="text-3xl">Welcome!</CardTitle>
        <CardDescription className="text-lg font-semibold text-black">
          Discover a New Word.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <SignInForm />
      </CardContent>
      <CardFooter className="p-0">
        <div className="gap-1.25 flex w-full flex-col items-center">
          <p className="text-base font-normal">
            {"Don't have an account yet?"}
          </p>
          <Link
            className="transform text-base font-medium hover:underline"
            href="/auth/signup"
          >
            Create Account
          </Link>
        </div>
      </CardFooter>
    </div>
  </Card>
);

export { SignInContainer };
