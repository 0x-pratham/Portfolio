import Image from "next/image";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export function ProjectHero({ project }: Props) {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="mb-4 inline-block rounded-full border border-violet-500/20 px-4 py-2 text-sm text-violet-400">
              {project.category}
            </span>

            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              {project.title}
            </h1>

            <p className="mb-6 text-xl text-slate-400">
              {project.longDescription}
            </p>

            <div className="flex gap-4">
              <span className="rounded-full bg-green-500/10 px-4 py-2 text-green-400">
                {project.status}
              </span>

              <span className="rounded-full bg-white/5 px-4 py-2">
                {project.year}
              </span>
            </div>
          </div>

          <div>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="rounded-3xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}