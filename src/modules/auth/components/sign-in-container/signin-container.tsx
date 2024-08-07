import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/modules/core/components/ui/card";
import { SignInForm } from "../sign-in-form";
import { type SignInContainerProps } from "./types";

const SignInContainer = ({ ...props }: SignInContainerProps) => (
  <Card
    className="border-card grid w-full max-w-full gap-2.5 rounded-md border-primary-light px-6 py-8 md:max-w-md"
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
    </div>
  </Card>
);

export { SignInContainer };
