"use client";

import { useState, type FormEvent } from "react";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "error"; message: string };

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail || !trimmedMessage) {
      setState({ status: "error", message: "Email and message are required." });
      return;
    }

    setState({ status: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: trimmedEmail,
          message: trimmedMessage,
          website: website.trim(),
        }),
      });

      const resContentType = res.headers.get("content-type") || "";
      const data = (resContentType.includes("application/json")
        ? ((await res.json()) as { ok?: boolean; error?: string })
        : {}) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setState({ status: "error", message: data.error || "Failed to send." });
        return;
      }

      setState({ status: "sent" });
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setState({ status: "error", message: "Failed to send." });
    }
  }

  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main>
        <Container className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Send a message and we’ll get back to you.
            </p>

            <Card className="mt-8 p-8">
              <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-zinc-300">Name</span>
                    <input
                      className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 focus:border-white/20"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-zinc-300">Email</span>
                    <input
                      className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 focus:border-white/20"
                      placeholder="you@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm text-zinc-300">Message</span>
                  <textarea
                    className="min-h-32 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 focus:border-white/20"
                    placeholder="How can we help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </label>

                <button
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
                  type="submit"
                  disabled={state.status === "sending"}
                >
                  {state.status === "sending" ? "Sending…" : "Send message"}
                </button>

                {state.status === "sent" ? (
                  <div className="text-sm text-emerald-300">Sent.</div>
                ) : null}

                {state.status === "error" ? (
                  <div className="text-sm text-red-300">{state.message}</div>
                ) : null}
              </form>
            </Card>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
