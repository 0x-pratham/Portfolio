import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";

import "@/styles/globals.css";

import { defaultMetadata } from "@/lib/metadata";

import { LenisProvider } from "@/components/providers/lenis-provider";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
  className={`
    ${cormorant.variable}
    ${dmSans.variable}
    ${jetbrains.variable}
  `}
>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context":
        "https://schema.org",

      "@type": "Person",

      name: "Prathamesh Bhil",

      url:
        "https://prathameshbhil.com",

      jobTitle:
  "Founder, Software Engineer, Cybersecurity Enthusiast",

      worksFor: {
        "@type":
          "Organization",

        name:
          "Cosmolix Pvt Ltd",
      },

      sameAs: [
        "https://github.com/0x-pratham",

        "https://www.linkedin.com/in/prathamesh-bhil-5a74ba415/",
      ],
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context":
        "https://schema.org",

      "@type":
        "Organization",

      name:
        "Cosmolix Pvt Ltd",

      url:
        "https://cosmolix.co.in",
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context":
        "https://schema.org",

      "@type":
        "WebSite",

      name:
        "Prathamesh Bhil",

      url:
        "https://prathameshbhil.com",
    }),
  }}
/>
<LenisProvider>
  {children}
</LenisProvider>
<Analytics />
<SpeedInsights />
      </body>
    </html>
  );
}