import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Best AI Voice Tools for Creators",
  description:
    "A curated list of AI voice tools for creators—text-to-speech, voice cleanup, and the settings that make it sound natural.",
};

type Tool = {
  name: string;
  bestFor: string;
  caveat: string;
  linkLabel: string;
  href: string;
};

const tools: Tool[] = [
  {
    name: "Editor built-in TTS",
    bestFor: "Fast testing and quick drafts",
    caveat: "Voices can sound generic and recognizable",
    linkLabel: "Try built-in TTS",
    href: "#",
  },
  {
    name: "Descript",
    bestFor: "Voice cleanup + edit by text",
    caveat: "Naturalness depends on plan/settings",
    linkLabel: "Try Descript",
    href: "#",
  },
  {
    name: "Play.ht",
    bestFor: "Lots of voice options and languages",
    caveat: "Easy to sound robotic if too fast",
    linkLabel: "Try Play.ht",
    href: "#",
  },
  {
    name: "ElevenLabs",
    bestFor: "Most natural narration for longer videos",
    caveat: "Keep one consistent voice + settings",
    linkLabel: "Try ElevenLabs",
    href: "#",
  },
];

const checklist = [
  "Short sentences",
  "Add pauses after tool names",
  "Add pronunciation notes (Veed, DaVinci, etc.)",
  "Consistent voice + settings",
  "Don’t impersonate real people",
];

export default function BestAiVoiceToolsPage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-12 sm:py-16">
        <Container>
          <header className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Best AI Voice Tools for Creators
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              Companion page for Video #2. Add your affiliate links and your exact
              recommended settings.
            </p>
          </header>

          <section className="mt-10 grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <Card key={tool.name} className="flex flex-col gap-3">
                <div className="text-lg font-semibold text-white">{tool.name}</div>
                <div className="text-sm text-zinc-300">
                  <span className="font-semibold text-zinc-200">Best for:</span> {tool.bestFor}
                </div>
                <div className="text-sm text-zinc-300">
                  <span className="font-semibold text-zinc-200">Caveat:</span> {tool.caveat}
                </div>
                <div className="pt-2">
                  <a
                    href={tool.href}
                    className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  >
                    {tool.linkLabel}
                  </a>
                </div>
                <div className="text-xs text-zinc-500">
                  Replace # with your affiliate link (or regular link).
                </div>
              </Card>
            ))}
          </section>

          <section className="mt-10">
            <Card>
              <div className="text-sm font-semibold text-white">Make TTS sound human</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="text-sm text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <section className="mt-10">
            <Card>
              <div className="text-sm font-semibold text-white">Affiliate disclosure</div>
              <div className="mt-2 text-sm text-zinc-300">
                Some links on this page may be affiliate links. If you buy through them,
                we may earn a commission at no extra cost to you.
              </div>
            </Card>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
