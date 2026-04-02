import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getAffiliateLink } from "@/lib/affiliateLinks";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const link = getAffiliateLink(slug);

  if (!link) {
    return NextResponse.redirect(new URL("/tools", request.url), 302);
  }

  let target: URL;
  try {
    target = new URL(link.url);
  } catch {
    return NextResponse.redirect(new URL("/tools", request.url), 302);
  }

  if (target.protocol !== "https:" && target.protocol !== "http:") {
    return NextResponse.redirect(new URL("/tools", request.url), 302);
  }

  return NextResponse.redirect(target, 302);
}
