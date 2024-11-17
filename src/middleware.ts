import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import PostHogClient from "./app/posthog";

async function isMaintenanceMode() {
  try {
    let flags = undefined;

    const posthog = PostHogClient();
    flags = await posthog.getAllFlags(
      "user_distinct_id", // replace with a user's distinct ID
    );
    await posthog.shutdown();

    return flags["maintenance_mode"];
  } catch (error) {
    return console.log("Error getting flags", error);
  }
}

export async function middleware(request: NextRequest) {
  const isMaintenance =
    process.env.NODE_ENV === "production" && (await isMaintenanceMode());

  if (isMaintenance) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|maintenance).*)",
  ],
};
