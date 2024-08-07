import { Card } from "~/modules/core/components/ui/card";
import { type LoginFormProps } from "./types";

const LoginForm = ({ ...props }: LoginFormProps) => {
  return <Card className="rounded-base px-6 py-8"></Card>;
};

export { LoginForm };
