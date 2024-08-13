import "next-auth";
import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string; // O el tipo que corresponda
    } & DefaultSession["user"];
  }

  interface JWT extends DefaultJWT {
    id?: string;
  }
}
