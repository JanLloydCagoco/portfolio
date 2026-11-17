import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload } from "@/backend/validation/contact.schema";
import { sendContactEmail } from "@/backend/services/contact.service";

export async function POST(req: NextRequest) {
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
