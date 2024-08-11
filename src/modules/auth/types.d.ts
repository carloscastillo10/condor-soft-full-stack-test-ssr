import { type z } from "zod";
import { type signUpSchema } from "./utils/validation";

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type CreateUser = Omit<SignUpFormData, "confirmPassword">;
