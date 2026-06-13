import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="py-32">
        <div className="container-custom">

          <p className="mb-4 text-[var(--accent)] uppercase tracking-[0.35em]">
            Projects & Initiatives
          </p>

          <h1 className="mb-8 font-[var(--font-cormorant)] text-7xl font-light">
            Building Solutions
            That Create Impact.
          </h1>

          <p className="max-w-3xl text-xl text-[var(--warm-grey)]">
            A collection of projects spanning cybersecurity,
            education technology, artificial intelligence,
            agriculture, and entrepreneurship.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  p-8
                  transition-all
                  hover:border-[var(--accent)]
                "
              >
                <p className="mb-3 text-sm text-[var(--accent)]">
                  {project.category}
                </p>

                <h2 className="mb-4 text-3xl">
                  {project.title}
                </h2>

                <p className="text-[var(--warm-grey)]">
                  {project.description}
                </p>
              </Link>
            ))}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}