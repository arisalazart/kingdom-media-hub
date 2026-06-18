import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { serverEnv } from "@/lib/env";

/**
 * Lead intake endpoint. Validates with the shared Zod schema, then emails the
 * team via Resend when configured. With no RESEND_API_KEY the lead is logged
 * server-side and a success response is still returned, so the form works in
 * development and never loses a submission silently.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  if (!serverEnv.resendApiKey) {
    // eslint-disable-next-line no-console
    console.info("[contact] new lead (email not configured):", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(serverEnv.resendApiKey);

    await resend.emails.send({
      from: serverEnv.contactFromEmail,
      to: serverEnv.contactToEmail,
      replyTo: lead.email,
      subject: `New lead — ${lead.company} (${lead.projectType})`,
      text: [
        `Name: ${lead.name}`,
        `Company: ${lead.company}`,
        `Industry: ${lead.industry}`,
        `Monthly revenue: ${lead.revenue}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Project type: ${lead.projectType}`,
        `Message: ${lead.message ?? "—"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] email send failed:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
