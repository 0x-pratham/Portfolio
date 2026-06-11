import Link from "next/link";

import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold">
            Projects
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                hover:border-violet-500/40
                hover:-translate-y-1
              "
            >
              <p className="mb-3 text-sm text-violet-400">
                {project.category}
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                {project.title}
              </h2>

              <p className="text-slate-400">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}