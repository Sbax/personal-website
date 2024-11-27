import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // disables the editor in prod
  const env = process.env.NODE_ENV;
  if (env !== "development") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/editor/:path*"],
};
