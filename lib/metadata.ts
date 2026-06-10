import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Prathamesh Bhil | Founder & CEO of Cosmolix Pvt Ltd",
    template: "%s | Prathamesh Bhil",
  },

  description: siteConfig.description,

  keywords: [
    "Prathamesh Bhil",
    "Cosmolix",
    "Founder",
    "CEO",
    "Software Engineer",
    "Cybersecurity",
    "Full Stack Developer",
  ],

  authors: [
    {
      name: siteConfig.author.name,
    },
  ],

  creator: siteConfig.author.name,

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Prathamesh Bhil | Founder & CEO of Cosmolix Pvt Ltd",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Prathamesh Bhil | Founder & CEO of Cosmolix Pvt Ltd",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};