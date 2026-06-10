import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";

import "@/styles/globals.css";

import { defaultMetadata } from "@/lib/metadata";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
        className={`${spaceGrotesk.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}