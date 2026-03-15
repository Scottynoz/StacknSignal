import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "A curated list of AI tools for creators—video, voice, research, thumbnails, captions, and workflows.",
};

const sections = [
  {
    title: "AI Video",
    items: [
      {
        name: "(Add your first tool)",
        desc: "AI video generation, editing helpers, b-roll, and speed workflows.",
      },
      {
        name: "(Add your first tool)",
        desc: "A second option for creators with a different style or price point.",
      },
    ],
  },
  {
    title: "AI Voice",
    items: [
      {
        name: "(Add your first tool)",
        desc: "Natural-sounding text-to-speech for voiceovers.",
      },
      {
        name: "(Add your first tool)",
        desc: "Voice cleanup: noise removal, leveling, and clarity.",
      },
    ],
  },
  {
    title: "AI Research (With Sources)",
    items: [
      {
        name: "(Add your first tool)",
        desc: "Search, summarize, and cite sources for scripts and briefs.",
      },
    ],
  },
  {
    title: "AI Thumbnails & Design",
    items: [
      {
        name: "(Add your first tool)",
        desc: "Ideas, iterations, and fast design for thumbnails and branding.",
      },
    ],
  },
  {
    title: "Captions & Repurposing",
    items: [
      {
        name: "(Add your first tool)",
        desc: "Turn long videos into Shorts, captions, and cross-platform cuts.",
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              Curated AI tools for creators. Start simple. Upgrade only when it saves
              you real time.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-sm font-semibold tracking-wide text-zinc-200">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {section.items.map((item, idx) => (
                    <Card
                      key={`${section.title}-${idx}`}
                      className="flex flex-col gap-2"
                    >
                      <div className="text-base font-semibold text-white">
                        {item.name}
                      </div>
                      <div className="text-sm text-zinc-300">{item.desc}</div>
                      <div className="mt-3 text-xs text-zinc-500">
                        Add affiliate link + “Best for” notes here.
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
