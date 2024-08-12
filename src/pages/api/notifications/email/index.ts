import { type NextApiRequest, type NextApiResponse } from "next";
import { type EmailNotificationRequestBody } from "~/modules/core/types";
import {
  emitReminderNotificationEvent,
  sendReminderEmailNotification,
} from "~/modules/reminder/services";

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, start, user } = req.body as EmailNotificationRequestBody;
    await Promise.all([
      sendReminderEmailNotification({
        title,
        start: new Date(start),
        email: user.email,
      }),
      emitReminderNotificationEvent({
        userId: parseInt(user.id, 10),
        reminderTitle: title,
      }),
    ]);

    res.status(201).json({ message: "Email sent." });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";

    res.status(500).json({ message: errorMessage });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const methodHandlers: Record<
    string,
    (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  > = {
    POST: handlePost,
  };

  const handler = methodHandlers[req.method!];

  if (!handler) {
    res.setHeader("Allow", Object.keys(methodHandlers));

    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  return handler(req, res);
}
