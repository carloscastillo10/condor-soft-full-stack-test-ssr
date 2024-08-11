import { z } from "zod";
import {
  trimAndRemoveWhitespace,
  trimAndRemoveWhiteSpacesLeavingOnlyOne,
} from "~/modules/core/utils/sanitize";

const email = z
  .string({ required_error: "Email is required." })
  .min(1, "Email is required.")
  .email("Please enter a valid email address.");

const password = z
  .string({ required_error: "Password is required." })
  .min(1, "Password is required.")
  .transform(trimAndRemoveWhitespace);

const signInSchema = z.object({
  email,
  password,
});

const signUpSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required." })
      .min(1, "Name is required.")
      .transform(trimAndRemoveWhiteSpacesLeavingOnlyOne),
    lastName: z
      .string({ required_error: "Last Name is required." })
      .min(1, "Last Name is required.")
      .transform(trimAndRemoveWhiteSpacesLeavingOnlyOne),
    email,
    password,
    confirmPassword: z
      .string({ required_error: "You must confirm your new password." })
      .min(1, "You must confirm your new password.")
      .transform(trimAndRemoveWhitespace),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

export { signInSchema, signUpSchema };
