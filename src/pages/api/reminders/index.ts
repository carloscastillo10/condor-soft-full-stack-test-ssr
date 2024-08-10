import { type NextApiRequest, type NextApiResponse } from "next";
import { getToken, type JWT } from "next-auth/jwt";
import { createReminder } from "~/modules/reminder/services";
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

    res.status(201).json(newReminder);
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
  };

  const handler = methodHandlers[req.method!];

  if (!handler) {
    res.setHeader("Allow", Object.keys(methodHandlers));
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  return handler(req, res, session);
}
