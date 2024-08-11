import { SignUpContainer } from "../sign-up-container";
import { type SignUpSectionProps } from "./types";

const SignUpSection = ({ ...props }: SignUpSectionProps) => (
  <section
    className="flex min-h-screen items-center justify-center px-6"
    {...props}
  >
    <SignUpContainer />
  </section>
);

export { SignUpSection };
