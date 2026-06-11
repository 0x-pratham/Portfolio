import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export function ProjectOverview({ project }: Props) {
  return (
    <section className="py-20">
      <div className="container-custom grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Problem
          </h2>

          <p className="text-slate-400">
            {project.problem}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Solution
          </h2>

          <p className="text-slate-400">
            {project.solution}
          </p>
        </div>
      </div>
    </section>
  );
}