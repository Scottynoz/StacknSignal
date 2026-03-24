import Link from "next/link";

import { Container } from "@/components/Container";

const nav = [
  { href: "/tools", label: "Tools" },
  { href: "/brief", label: "Weekly Brief" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="text-sm font-semibold tracking-tight text-white">S</span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            Stack N Signal
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#signup"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Get the Kit
          </Link>
        </nav>

        <Link
          href="#signup"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 md:hidden"
        >
          Get the Kit
        </Link>
      </Container>
    </header>
  );
}
