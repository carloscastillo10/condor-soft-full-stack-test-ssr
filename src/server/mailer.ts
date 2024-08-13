import nodemailer from "nodemailer";
import { env } from "~/env";

export const mailer = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASSWORD,
  },
});
