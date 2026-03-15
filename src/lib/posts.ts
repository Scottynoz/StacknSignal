export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tag: "Weekly Brief" | "Tools";
};

export const posts: Post[] = [
  {
    slug: "ai-weekly-brief-2026-03-15",
    title: "This Week in AI: 5 Updates Creators Should Know (With Sources)",
    date: "2026-03-15",
    description:
      "Five creator-relevant AI updates, what changed, and what to try—plus source links.",
    tag: "Weekly Brief",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
