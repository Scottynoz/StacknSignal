import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Expected application/json" }, { status: 415 });
    }

    let body: { name?: string; email?: string; message?: string };
    try {
      body = (await request.json()) as { name?: string; email?: string; message?: string };
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    const MAX_NAME_LENGTH = 200;
    const MAX_EMAIL_LENGTH = 320;
    const MAX_MESSAGE_LENGTH = 10000;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email, message" },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json({ error: "Name too long" }, { status: 400 });
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json({ error: "Email too long" }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    if (/[\r\n]/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailLooksValid) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
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
            "Server not configured. Missing one of SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO",
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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact failed", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
