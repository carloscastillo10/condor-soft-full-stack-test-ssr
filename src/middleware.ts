// import { withAuth } from "next-auth/middleware";

import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

// import { NextResponse } from "next/server";
// export { default } from "next-auth/middleware";

const protectedPages = ["/"];
const publicPages = ["/auth/signin", "/auth/signup"];

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  if (token && publicPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && protectedPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
