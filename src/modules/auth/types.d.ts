import { type z } from "zod";
import { type signUpSchema } from "./utils/validation";

export type SignUpFormData = z.infer<typeof signUpSchema>;

export interface CreateUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}
