import { type NextApiRequest, type NextApiResponse } from "next";

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("emailBody:", req.body);
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
