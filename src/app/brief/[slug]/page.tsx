import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getPost } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BriefPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <Link href="/brief" className="text-sm text-zinc-300 hover:text-white">
              ← Back to Weekly Brief
            </Link>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-lg text-zinc-300">{post.description}</p>
            <div className="mt-4 text-sm text-zinc-400">{post.date}</div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
            <article className="space-y-4 text-zinc-200">
              <p>
                Replace this placeholder with your weekly brief content. Keep it to 3–5
                updates, and always include sources.
              </p>

              <h2 className="pt-4 text-xl font-semibold text-white">Updates</h2>
              <div className="space-y-4">
                <Card>
                  <div className="text-base font-semibold text-white">
                    Update #1: (Headline)
                  </div>
                  <div className="mt-2 text-sm text-zinc-300">
                    What changed, why it matters for creators, and what to try.
                  </div>
                  <div className="mt-3 text-xs text-zinc-500">Source: (link)</div>
                </Card>
                <Card>
                  <div className="text-base font-semibold text-white">
                    Update #2: (Headline)
                  </div>
                  <div className="mt-2 text-sm text-zinc-300">
                    What changed, why it matters for creators, and what to try.
                  </div>
                  <div className="mt-3 text-xs text-zinc-500">Source: (link)</div>
                </Card>
              </div>
            </article>

            <aside className="space-y-4">
              <Card>
                <div className="text-sm font-semibold text-white">Sources</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Add links here and also in the YouTube description.
                </div>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-white">Tools mentioned</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Add affiliate links only where relevant.
                </div>
              </Card>

              <Card>
                <div className="text-sm font-semibold text-white" id="signup">
                  Get the AI Creator Stack Kit
                </div>
                <div className="mt-2 text-sm text-zinc-300">
                  Weekly tools + workflows + updates. No spam.
                </div>
                <div className="mt-4">
                  <a
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    href="#"
                  >
                    Join the list
                  </a>
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
