import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  password: z
    .string({ required_error: "Password is required." })
    .min(1, "Password is required."),
});

export { signInSchema };
