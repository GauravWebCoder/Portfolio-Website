"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";
import { site } from "@/data/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
  name?: string;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject") || undefined,
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please fix the errors below.", fieldErrors };
  }

  const { name, email, subject, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      status: "success",
      name,
      message: `Thanks, ${name}. Email delivery isn't configured yet — reach me directly at ${site.email} and I'll follow up.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: site.email,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch {
    return {
      status: "success",
      name,
      message: `Thanks, ${name} — your message was received, but I couldn't confirm delivery. Feel free to also email me directly at ${site.email}.`,
    };
  }

  return { status: "success", name, message: `Thanks ${name} — I'll get back to you soon.` };
}
