import { Resend } from "resend";
import { ContactPayload } from "../validation/contact.schema";

let client: Resend | undefined;

export async function sendContactEmail(payload: ContactPayload): Promise<{ success: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) throw new Error("RESEND_API_KEY or CONTACT_EMAIL is not set");

  client ??= new Resend(apiKey);
  const { error } = await client.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to,
    replyTo: payload.email,
    subject: `New Inquiry from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
  });

  // Resend reports failures in the result instead of throwing
  if (error) throw new Error(error.message);

  return { success: true };
}
