import { type z } from "zod";
import { type signInSchema } from "../../utils/validation";

export type SignInFormProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["form"]
>;

export type SignInFormData = z.infer<typeof signInSchema>;
