import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Best AI Video Tools for Creators",
  description:
    "A curated list of AI video tools creators actually use—plus what each is best for and where it fits in a real workflow.",
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
    name: "CapCut",
    bestFor: "Fast edits, templates, captions, quick social cuts",
    caveat: "You may outgrow it if you need deep control",
    linkLabel: "Try CapCut",
    href: "/go/capcut",
  },
  {
    name: "Descript",
    bestFor: "Edit video like a document + voice cleanup",
    caveat: "The workflow feels different at first",
    linkLabel: "Try Descript",
    href: "/go/descript",
  },
  {
    name: "Runway",
    bestFor: "AI video effects + generative tools",
    caveat: "Expect retries; results can be inconsistent",
    linkLabel: "Try Runway",
    href: "/go/runway",
  },
  {
    name: "Opus Clip",
    bestFor: "Repurpose long videos into Shorts",
    caveat: "Always review auto-selected clips",
    linkLabel: "Try Opus Clip",
    href: "/go/opusclip",
  },
  {
    name: "VEED",
    bestFor: "Browser-based editing, captions, quick collaboration",
    caveat: "Heavy projects can feel slower than desktop editing",
    linkLabel: "Try VEED",
    href: "/go/veed",
  },
  {
    name: "DaVinci Resolve",
    bestFor: "High-quality long-form editing + color",
    caveat: "Bigger learning curve",
    linkLabel: "Try Resolve",
    href: "/go/davinci",
  },
];

export default function BestAiVideoToolsPage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-12 sm:py-16">
        <Container>
          <header className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Best AI Video Tools for Creators
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              This is the companion page for Video #1. Add your affiliate links, notes,
              and alternatives here.
            </p>
          </header>

          <section className="mt-8">
            <Card>
              <div className="text-sm font-semibold text-white">Watch Video #1</div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/JcAM-atDMg8"
                    title="Best AI Video Tools for Creators"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  href="https://youtu.be/JcAM-atDMg8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open on YouTube
                </a>
              </div>
            </Card>
          </section>

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

          <section className="mt-10 grid gap-4 lg:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold text-white">Best overall</div>
              <div className="mt-2 text-sm text-zinc-300">
                Pick one tool you’d recommend to most creators.
              </div>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-white">Best budget</div>
              <div className="mt-2 text-sm text-zinc-300">
                A free or low-cost option that still ships quality.
              </div>
            </Card>
            <Card>
              <div className="text-sm font-semibold text-white">Best upgrade</div>
              <div className="mt-2 text-sm text-zinc-300">
                The “level up” option once you’re serious.
              </div>
            </Card>
          </section>

          <section className="mt-10">
            <Card>
              <div className="text-sm font-semibold text-white" id="signup">
                Get the AI Creator Stack Kit
              </div>
              <div className="mt-2 text-sm text-zinc-300">
                Weekly tools + workflows + updates. No spam.
              </div>
              <div className="mt-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  href="#"
                >
                  Join the list
                </a>
              </div>
              <div className="mt-3 text-xs text-zinc-500">
                This is a placeholder. Wire to ConvertKit later.
              </div>
            </Card>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
