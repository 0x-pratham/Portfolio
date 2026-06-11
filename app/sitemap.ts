import { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/projects`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}