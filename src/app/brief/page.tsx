import type { Metadata } from "next";
import Link from "next/link";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Weekly Brief",
  description:
    "Creator-focused AI updates with sources—what changed, why it matters, and what to try.",
};

export default function BriefIndexPage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Weekly Brief
            </h1>
            <p className="mt-3 text-lg text-zinc-300">
              Creator-focused AI updates with sources. No hype—just what changed and
              what to try.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {posts.map((post) => (
              <Link key={post.slug} href={`/brief/${post.slug}`} className="block">
                <Card className="transition hover:bg-white/7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {post.title}
                      </div>
                      <div className="mt-1 text-sm text-zinc-300">
                        {post.description}
                      </div>
                    </div>
                    <div className="text-sm text-zinc-400">{post.date}</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
