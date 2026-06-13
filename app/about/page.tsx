import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { AboutHero } from "@/components/sections/about-hero";
import { FounderStory } from "@/components/sections/founder-story";
import { MissionVision } from "@/components/sections/mission-vision";
import { CosmolixSection } from "@/components/sections/cosmolix-section";
import { ValuesSection } from "@/components/sections/values-section";
import { ContactCTA } from "@/components/sections/contact-cta";
import { FutureVision } from "@/components/sections/future-vision";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Prathamesh Bhil, Founder & CEO of Cosmolix Pvt Ltd, creator of GenXCode, software engineer, researcher, and technology leader.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <FounderStory />
        <MissionVision />
        <CosmolixSection />
        <ValuesSection />
        <FutureVision />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}