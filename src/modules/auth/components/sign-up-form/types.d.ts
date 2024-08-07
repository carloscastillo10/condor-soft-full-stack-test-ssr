import { type z } from "zod";
import { type signUpSchema } from "../../utils/validation";

export type SignUpFormProps = OmitNonHTMLAttributes<
  JSX.IntrinsicElements["form"]
>;

export type SignUpFormData = z.infer<typeof signUpSchema>;
