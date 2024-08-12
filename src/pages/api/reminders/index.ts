import { type NextApiRequest, type NextApiResponse } from "next";
import { getToken, type JWT } from "next-auth/jwt";
import {
  createReminder,
  listReminders,
  saveNotification,
  scheduleReminder,
} from "~/modules/reminder/services";
import { type ReminderFormData } from "~/modules/reminder/types";

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse,
  session: JWT,
) {
  try {
    const data = req.body as ReminderFormData;
    const newReminder = await createReminder({
      ...data,
      date: new Date(data.date),
      userId: parseInt(session.id as string, 10),
    });

    // Schedule reminder in upstash
    const { scheduleId } = await scheduleReminder(newReminder);
    await saveNotification({ reminderId: newReminder.id, scheduleId });

    res.status(201).json(newReminder);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    console.log("error", error);

    res.status(500).json({ message: errorMessage });
  }
}

async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse,
  session: JWT,
) {
  try {
    const { from, to } = req.query;
    if (!from || !to) {
      return res.status(400).json({ message: "Missing required parameters" });
    }

    const reminders = await listReminders({
      userId: parseInt(session.id as string, 10),
      from: new Date(from as string),
      to: new Date(to as string),
    });

    res.status(200).json(reminders);
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
  const session = await getToken({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const methodHandlers: Record<
    string,
    (req: NextApiRequest, res: NextApiResponse, session: JWT) => Promise<void>
  > = {
    POST: handlePost,
    GET: handleGet,
  };

  const handler = methodHandlers[req.method!];

  if (!handler) {
    res.setHeader("Allow", Object.keys(methodHandlers));

    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  return handler(req, res, session);
}
