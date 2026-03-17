export type AffiliateLink = {
  label: string;
  url: string;
};

export const affiliateLinks: Record<string, AffiliateLink> = {
  capcut: { label: "CapCut", url: "https://www.capcut.com/" },
  descript: { label: "Descript", url: "https://www.descript.com/" },
  runway: { label: "Runway", url: "https://runwayml.com/" },
  opusclip: { label: "Opus Clip", url: "https://www.opus.pro/" },
  veed: { label: "VEED", url: "https://www.veed.io/" },
  davinci: { label: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve" },

  tts: { label: "Editor built-in TTS", url: "https://www.capcut.com/" },
  playht: { label: "Play.ht", url: "https://play.ht/" },
  elevenlabs: { label: "ElevenLabs", url: "https://elevenlabs.io/" },
};

export function getAffiliateLink(slug: string): AffiliateLink | null {
  return affiliateLinks[slug] ?? null;
}
