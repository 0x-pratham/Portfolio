import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { AboutPreview } from "@/components/sections/about-preview";
import { Metrics } from "@/components/sections/metrics";
import { FeaturedProjects } from "@/components/sections/featured-projects";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SocialProof />
        <FeaturedProjects />  
        <Metrics />
        <AboutPreview />
      </main>

      <Footer />
    </>
  );
}