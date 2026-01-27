import { NextRequest, NextResponse } from "next/server";

const BASIC_AUTH_USER = "shummake";
const BASIC_AUTH_PASSWORD = "shummakeshummake";

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [user, password] = decoded.split(":");
      if (user === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|apple-icon.png).*)"],
};
