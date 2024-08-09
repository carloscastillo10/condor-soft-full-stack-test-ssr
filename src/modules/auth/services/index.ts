import bcrypt from "bcrypt";
import { type User } from "~/modules/core/types";
import { db } from "~/server/db";

const findUserByEmail = async (email?: string) => {
  const userFound = await db.user.findUnique({ where: { email } });

  return userFound;
};

const login = async ({
  email,
  password,
}: {
  email?: string;
  password: string;
}): Promise<User> => {
  const userFound = await findUserByEmail(email);

  if (!userFound) {
    throw new Error("No user found");
  }

  const matchPassword = await bcrypt.compare(password, userFound.password);

  if (!matchPassword) {
    throw new Error("Incorrect password");
  }

  const { id, name, lastName } = userFound;

  return {
    id: id.toString(),
    name,
    lastName,
    email: userFound.email,
  };
};

export { findUserByEmail, login };
