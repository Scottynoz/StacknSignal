import type { MetadataRoute } from "next";

import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stacknsignal.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/brief`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
  ];

  const briefRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/brief/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...briefRoutes];
}
