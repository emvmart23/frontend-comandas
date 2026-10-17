import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

const protectedRoutes = ["/w",];
const publicRoutes = [ "/auth/sign-up", "/auth/sign-in", "/dashboard", "/products", "/users"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};