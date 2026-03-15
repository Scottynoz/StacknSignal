import Link from "next/link";

import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold text-white">Stack N Signal</div>
          <div className="text-sm text-zinc-400">
            Tools, workflows, and weekly AI updates for creators.
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <nav className="flex flex-wrap gap-3">
            <Link href="/tools" className="text-sm text-zinc-300 hover:text-white">
              Tools
            </Link>
            <Link href="/brief" className="text-sm text-zinc-300 hover:text-white">
              Weekly Brief
            </Link>
            <Link href="/about" className="text-sm text-zinc-300 hover:text-white">
              About
            </Link>
          </nav>

          <div className="max-w-lg text-sm text-zinc-500">
            Some links may be affiliate links. If you buy through them, we may earn a
            commission at no extra cost to you.
          </div>
        </div>
      </Container>
    </footer>
  );
}
