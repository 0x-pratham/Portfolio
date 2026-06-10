import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { AboutPreview } from "@/components/sections/about-preview";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SocialProof />
        <AboutPreview />
      </main>

      <Footer />
    </>
  );
}