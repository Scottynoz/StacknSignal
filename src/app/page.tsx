import Link from "next/link";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-56 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl" />
          </div>

          <Container className="relative py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                <span className="text-white/90">Stack N Signal</span>
                <span className="text-white/20">•</span>
                <span>AI tools for creators, ranked and explained</span>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
                The AI Creator Stack—Plus the Signal That Matters.
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-300 sm:text-xl">
                Curated AI tools, tested workflows, and weekly AI updates with sources.
                No hype—just what helps creators ship faster.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton href="#signup">Get the AI Creator Stack Kit</PrimaryButton>
                <SecondaryButton href="/tools">Browse tools</SecondaryButton>
                <Link href="/brief" className="text-sm text-zinc-300 hover:text-white">
                  Read the Weekly Brief →
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Card>
                  <div className="text-sm font-semibold text-white">Tools</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    Video, voice, captions, thumbnails, research, and automation.
                  </div>
                </Card>
                <Card>
                  <div className="text-sm font-semibold text-white">Workflows</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    Repeatable templates that save hours every week.
                  </div>
                </Card>
                <Card>
                  <div className="text-sm font-semibold text-white">Weekly Brief</div>
                  <div className="mt-2 text-sm text-zinc-300">
                    Creator-focused AI updates with sources. No speculation.
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-8">
              <div className="text-sm font-semibold text-white">Start here</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Your Week 1 creator stack
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Publish two list videos (tools) and one weekly brief (sources). Each
                upload gets a matching page with links.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">Now live: Video #1</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Best AI Video Tools for Creators
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    href="https://youtu.be/JcAM-atDMg8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch on YouTube
                  </a>
                  <SecondaryButton href="/best-ai-video-tools-for-creators">
                    Video #1 links
                  </SecondaryButton>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">Now live: Video #2</div>
                <div className="mt-2 text-sm text-zinc-300">Best AI Voice Tools for Creators</div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    href="https://youtu.be/qvGNClsSadc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch on YouTube
                  </a>
                  <SecondaryButton href="/best-ai-voice-tools-for-creators">
                    Video #2 links
                  </SecondaryButton>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <SecondaryButton href="/tools">Tools page</SecondaryButton>
                <SecondaryButton href="/brief">Weekly Brief</SecondaryButton>
              </div>
            </Card>

            <Card className="p-8">
              <div className="text-sm font-semibold text-white" id="signup">
                Get the AI Creator Stack Kit
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Weekly tools + workflows + updates. No spam.
              </p>
              <div className="mt-4">
                <form className="flex flex-col gap-3">
                  <input
                    className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 focus:border-white/20"
                    placeholder="you@example.com"
                    type="email"
                    autoComplete="email"
                  />
                  <button
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    type="button"
                  >
                    Join the list
                  </button>
                  <div className="text-xs text-zinc-500">
                    This is a placeholder form. Wire it to ConvertKit later.
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
