import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload } from "@/backend/validation/contact.schema";
import { sendContactEmail } from "@/backend/services/contact.service";

// shortcut: per-instance memory, so serverless instances don't share counts; upgrade to a shared store (e.g. Upstash) if abused.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) for (const [k, v] of hits) if (now - v[v.length - 1] > WINDOW_MS) hits.delete(k);
  return recent.length > MAX_HITS;
}

export async function POST(req: NextRequest) {
  // Vercel sets x-real-ip itself; the forwarded header is client-spoofable elsewhere.
  const ip = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  try {
    const body = await req.json().catch(() => null);

    // Honeypot: people never see this field, so a filled one is a bot. Answer OK and send nothing.
    if (body?.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const validation = validateContactPayload(body);

    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: validation.error || "Invalid request." },
        { status: 400 }
      );
    }

    // Only real submissions use up an attempt (bots and malformed bodies exit above).
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    await sendContactEmail(validation.data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
