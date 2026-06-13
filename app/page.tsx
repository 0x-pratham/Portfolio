import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsEcosystem } from "@/components/sections/skills-ecosystem";

import { ContactCTA } from "@/components/sections/contact-cta";
import { Metrics } from "@/components/sections/metrics";
import { AchievementGrid } from "@/components/sections/achievement-grid";
import { ResearchPreview } from "@/components/sections/research-preview";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
  <Hero />

  <Metrics />

  <AboutPreview />

  <AchievementGrid />

  <FeaturedProjects />

  <ResearchPreview />

  <SkillsEcosystem />

  <ContactCTA />
</main>

      <Footer />
    </>
  );
}