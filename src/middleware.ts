import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("invoice-session")?.value;

  if (!token) return NextResponse.redirect(new URL("/auth/login", request.url));

  try {
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secretKey);
  } catch (e) {
    console.log(e);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/create"],
};
