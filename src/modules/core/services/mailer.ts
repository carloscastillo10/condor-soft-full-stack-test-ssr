import ejs, { type Data } from "ejs";
import { env } from "~/env";
import { mailer } from "~/server/mailer";
import { type Email } from "../types";

const renderTemplate = (template: string, data: Data) => {
  return ejs.render(template, data);
};

const sendEmail = async ({ to, subject, template, data }: Email) => {
  await mailer.sendMail({
    from: env.EMAIL_USER,
    to,
    subject,
    html: renderTemplate(template, data),
  });
};

export { sendEmail };
