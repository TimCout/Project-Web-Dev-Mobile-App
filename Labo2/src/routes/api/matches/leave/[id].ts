import type { APIEvent } from "@solidjs/start/server";
import { hasJoined, leaveMatch } from "~/lib/match";

export async function POST(event: APIEvent) {
  try {
    await leaveMatch(Number(event.params.id));
    return { success: true };
  } catch {
    return { success: false };
  }
}

export async function GET(event: APIEvent) {
  return await hasJoined(Number(event.params.id));
}
