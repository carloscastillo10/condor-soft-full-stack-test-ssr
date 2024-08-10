import { z } from "zod";
import { trimAndRemoveWhiteSpacesLeavingOnlyOne } from "~/modules/core/utils/sanitize";

const createReminderSchema = z.object({
  title: z
    .string({ required_error: "Title is required." })
    .min(1, "Title is required.")
    .transform(trimAndRemoveWhiteSpacesLeavingOnlyOne),
  date: z.date({ required_error: "Date of event is required." }),
  time: z.string({ required_error: "Time of event is required." }),
  color: z.string(),
});

export { createReminderSchema };
