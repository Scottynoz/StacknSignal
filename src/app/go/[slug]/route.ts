import { NextResponse } from "next/server";

import { getAffiliateLink } from "@/lib/affiliateLinks";

export function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const link = getAffiliateLink(params.slug);

  if (!link) {
    return NextResponse.redirect(new URL("/tools", _request.url), 302);
  }

  return NextResponse.redirect(link.url, 302);
}
