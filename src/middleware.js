import { NextResponse } from "next/server";

export function middleware(request) {
  //   const pathname = request.nextUrl.pathname;

  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};