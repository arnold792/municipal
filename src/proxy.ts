import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function proxy(request: NextRequest) {
  const response = await updateSession(request);

  if (request.nextUrl.pathname === "/") {
    const redirectResponse = NextResponse.redirect(
      new URL("/dashboard", request.url),
    );

    response.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value);
    });

    for (const header of ["cache-control", "expires", "pragma"] as const) {
      const value = response.headers.get(header);
      if (value) redirectResponse.headers.set(header, value);
    }

    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets and images.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
