import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ROUTES = {
  LOGIN: "/auth/signin",
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
  ADMIN_HOME: "/dashboard/admin",
} as const;

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionType = request.cookies.get("session_type")?.value;
  const refreshToken = request.cookies.get("session_id_ref")?.value;

  const hasAdminSession = sessionType === "ADMIN" && !!refreshToken;

  const redirectTo = (path: string) => NextResponse.redirect(new URL(path, request.url));

  if (pathname.startsWith(ROUTES.AUTH)) {
    return hasAdminSession ? redirectTo(ROUTES.ADMIN_HOME) : NextResponse.next();
  }

  if (pathname.startsWith(ROUTES.DASHBOARD)) {
    if (!hasAdminSession) {
      const loginUrl = new URL(ROUTES.LOGIN, request.url);
      loginUrl.searchParams.set("callbackUrl", pathname + request.nextUrl.search);
      return NextResponse.redirect(loginUrl);
    }

    if (!pathname.startsWith(ROUTES.ADMIN_HOME)) return redirectTo(ROUTES.ADMIN_HOME);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"],
};
