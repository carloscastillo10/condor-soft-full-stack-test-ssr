import { SignInContainer } from "../sign-in-container";
import { type SignInSectionProps } from "./types";

const SignInSection = ({ ...props }: SignInSectionProps) => (
  <section
    className="flex min-h-screen items-center justify-center px-6"
    {...props}
  >
    <SignInContainer />
  </section>
);

export { SignInSection };
