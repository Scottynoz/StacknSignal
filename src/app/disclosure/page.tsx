import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Disclosure",
  description:
    "Affiliate disclosure and advertising transparency for Stack N Signal.",
};

export default function DisclosurePage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Disclosure
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              Stack N Signal is reader-supported. This page explains how we make money
              and how we handle affiliate links.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            <Card>
              <div className="text-sm font-semibold text-white">Affiliate links</div>
              <div className="mt-2 text-sm text-zinc-300">
                Some links on this site may be affiliate links. If you buy through
                them, we may earn a commission at no extra cost to you.
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-white">Amazon Associates</div>
              <div className="mt-2 text-sm text-zinc-300">
                As an Amazon Associate I earn from qualifying purchases.
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-white">Editorial independence</div>
              <div className="mt-2 text-sm text-zinc-300">
                We aim to recommend tools based on practical creator workflows.
                Mentions do not guarantee coverage, and we don’t accept payment for
                positive reviews.
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-white">Questions</div>
              <div className="mt-2 text-sm text-zinc-300">
                If you have questions about a link or recommendation, contact us via
                the email address listed on the channel and business profiles.
              </div>
            </Card>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
