import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Expected application/json" }, { status: 415 });
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email, message" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPortRaw = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.CONTACT_TO;
    const mailFrom = process.env.CONTACT_FROM || smtpUser;

    if (!smtpHost || !smtpPortRaw || !smtpUser || !smtpPass || !mailTo) {
      return NextResponse.json(
        {
          error:
            "Server not configured. Missing one of SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO (CONTACT_FROM is optional and defaults to SMTP_USER)",
        },
        { status: 500 }
      );
    }

    const smtpPort = Number(smtpPortRaw);
    if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
      return NextResponse.json({ error: "Invalid SMTP_PORT" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    try {
      const subjectName = name ? ` from ${name}` : "";

      await transporter.sendMail({
        from: mailFrom,
        to: mailTo,
        replyTo: email,
        subject: `Stack N Signal contact${subjectName}`,
        text: [
          `Name: ${name || "(not provided)"}`,
          `Email: ${email}`,
          "",
          message,
        ].join("\n"),
      });
    } finally {
      transporter.close();
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact failed", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
