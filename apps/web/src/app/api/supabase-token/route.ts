import { auth } from "@/lib/auth";
import { mintSupabaseJWT } from "@openhospi/supabase/jwt";
import { headers } from "next/headers";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = await mintSupabaseJWT(session.user.id);
  return Response.json({ token });
}
