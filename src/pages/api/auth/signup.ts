import { type NextApiRequest, type NextApiResponse } from "next";
import { createUser } from "~/modules/auth/services";
import { type CreateUser } from "~/modules/auth/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const { name, lastName, email, password } = req.body as CreateUser;
      const newUser = await createUser({ name, lastName, email, password });

      res.status(201).json(newUser);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";

      res.status(500).json({ message: errorMessage });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
