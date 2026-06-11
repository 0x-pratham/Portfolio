import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/data/projects";

import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectTechStack } from "@/components/projects/project-tech-stack";
import { ProjectResults } from "@/components/projects/project-results";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find the match in your project array
  const project = projects.find((p) => p.slug === slug);

  // Kick user to a 404 if the project slug is garbage
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectTechStack project={project} />
        <ProjectResults project={project} />
      </main>

      <Footer />
    </>
  );
}