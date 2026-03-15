import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stack N Signal curates AI tools, workflows, and creator-focused AI updates with sources.",
};

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              About
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              Stack N Signal helps creators work faster with AI.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="text-base font-semibold text-white">What we publish</div>
              <div className="mt-2 text-sm text-zinc-300">
                Two list videos per week (AI tools + workflows) plus a weekly AI brief
                with sources.
              </div>
            </Card>

            <Card>
              <div className="text-base font-semibold text-white">Trust promise</div>
              <div className="mt-2 text-sm text-zinc-300">
                No hype. No income claims. When we cover news, we link sources.
              </div>
            </Card>

            <Card className="lg:col-span-2">
              <div className="text-base font-semibold text-white">Affiliate disclosure</div>
              <div className="mt-2 text-sm text-zinc-300">
                Some links on this site may be affiliate links. If you buy through
                them, we may earn a commission at no extra cost to you.
              </div>
            </Card>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
