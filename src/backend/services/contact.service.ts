import { Resend } from "resend";
import { ContactPayload } from "../validation/contact.schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(payload: ContactPayload): Promise<{ success: boolean }> {
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: payload.email,
    subject: `New Inquiry from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
  });

  // Resend reports failures in the result instead of throwing
  if (error) throw new Error(error.message);

  return { success: true };
}
