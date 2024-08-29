import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const baseUrl = new URL(request.url).origin;
  const redirectUrl = new URL("/auth/signin", baseUrl);
  return NextResponse.redirect(redirectUrl);
}
