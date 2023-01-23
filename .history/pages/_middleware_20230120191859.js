import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function midleware(req) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl

  // Allow the requests if the following is true
  // 1. It's a request for next-auth session & provider fetching
  // 2. the token exists
  if (pathname.includes('/api/auth') || token) {
    // continue on
    return NextResponse.next();
  }

  // Redirect them to login if they don't have token AND are requesting a protected route
  if (!token && pathname !== "/login")
}
