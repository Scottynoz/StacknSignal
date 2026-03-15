import Link from "next/link";

import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <SiteHeader />
      <main className="py-24">
        <Container>
          <div className="max-w-xl">
            <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
            <p className="mt-3 text-zinc-300">
              The page you’re looking for doesn’t exist.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Go home
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
