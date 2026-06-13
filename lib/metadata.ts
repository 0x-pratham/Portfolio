import type { Metadata } from "next";

import { siteConfig } from "./site-config";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(
    siteConfig.url
  ),

  title: {
    default:
      siteConfig.title,

    template:
      "%s | Prathamesh Bhil",
  },

  description:
    siteConfig.description,

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
  type: "website",
  locale: "en_US",
  url: siteConfig.url,
  siteName: siteConfig.title,
  title: siteConfig.title,
  description: siteConfig.description,
  images: [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.title,
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: siteConfig.title,
  description: siteConfig.description,
  creator: "@0x_Pratham",
  site: "@0x_Pratham",
  images: [siteConfig.ogImage],
},

  keywords: [
  "Prathamesh Bhil",
  "Software Engineer",
  "Founder",
  "Cosmolix",
  "GenXCode",
  "Cybersecurity",
  "Full Stack Developer",
  "Technology Entrepreneur",
  "Web Developer",
  "Next.js Developer",
  "Cyber Security Researcher",
"Founder & CEO",
"React Developer",
"TypeScript Developer",
"Penetration Tester",
"Ethical Hacker",
"Software Architect",
"India",
"Nagpur",
"Pune",
"JSPM University",
"Ajeenkya DY Patil University",
],

authors: [
  {
    name: "Prathamesh Bhil",
    url: siteConfig.url,
  },
],

creator: "Prathamesh Bhil",
publisher: "Prathamesh Bhil",
alternates: {
  canonical: siteConfig.url,
},  

themeColor: "#0D0D0D",
category: "Technology",
};