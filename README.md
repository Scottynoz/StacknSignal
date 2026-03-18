# Stack N Signal

Stack N Signal is a creator-focused AI tools and workflows site. It publishes ranked tool picks, companion pages for YouTube videos, and weekly brief updates with sources.

## Key pages

- Home: `/`
- Tools: `/tools`
- Weekly Brief: `/brief`
- Disclosure: `/disclosure`
- Video companion pages:
  - `/best-ai-video-tools-for-creators`
  - `/best-ai-voice-tools-for-creators`

## Monetization / outbound links

This site uses a redirect pattern for outbound links so you can keep YouTube descriptions stable and swap destinations later.

- Redirect route: `/go/[slug]`
- Link map: `src/lib/affiliateLinks.ts`

Example:

- `https://stacknsignal.com/go/elevenlabs` -> destination defined in `affiliateLinks`

## Compliance

- FTC-style affiliate disclosure is available at `/disclosure`.
- Amazon Associates disclosure is included ("As an Amazon Associate I earn from qualifying purchases.").

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```
