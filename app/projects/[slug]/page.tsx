import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Prathamesh Bhil`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="py-24">
        <div className="container-custom">
          <p className="mb-4 text-violet-400">
            {project.category}
          </p>

          <h1 className="mb-8 text-6xl font-bold">
            {project.title}
          </h1>

          <p className="mb-12 max-w-3xl text-xl text-slate-400">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map(
              (tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-4
                    py-2
                  "
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}