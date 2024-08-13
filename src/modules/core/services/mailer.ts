import ejs, { type Data } from "ejs";
import fs from "fs";
import path from "path";
import { env } from "~/env";
import { mailer } from "~/server/mailer";
import { type Email } from "../types";

const renderTemplate = (templePath: string, data: Data) => {
  const filePath = path.resolve(templePath);
  const template = fs.readFileSync(filePath, "utf-8");

  return ejs.render(template, data);
};

const sendEmail = async ({ to, subject, templatePath, data }: Email) => {
  await mailer.sendMail({
    from: env.EMAIL_USER,
    to,
    subject,
    html: renderTemplate(templatePath, data),
  });
};

export { sendEmail };
