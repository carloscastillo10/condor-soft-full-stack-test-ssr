import { type NextApiRequest, type NextApiResponse } from "next";
import { type Session } from "next-auth";
import { getSession } from "next-auth/react";

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
) {
  try {
  } catch (error) {}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });
}
