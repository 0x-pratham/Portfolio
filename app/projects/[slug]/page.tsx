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
        {/* Hero */}

<div className="max-w-5xl">

  <p
    className="
    mb-4
    text-sm
    uppercase
    tracking-[0.35em]
    text-[var(--accent)]
    "
  >
    {project.category}
  </p>

  <h1
    className="
    mb-8
    font-[var(--font-cormorant)]
    text-6xl
    font-light
    leading-[0.95]
    md:text-8xl
    "
  >
    {project.title}
  </h1>

  <p
    className="
    max-w-3xl
    text-xl
    leading-relaxed
    text-[var(--warm-grey)]
    "
  >
    {project.description}
  </p>

</div>

{/* Meta */}

<div
  className="
  mt-16
  grid
  gap-6
  md:grid-cols-3
  "
>

  <div
    className="
    rounded-3xl
    border
    border-[var(--border)]
    p-6
    "
  >
    <p className="text-sm text-[var(--warm-grey)]">
      Year
    </p>

    <p className="mt-2 text-2xl">
      {project.year}
    </p>
  </div>

  <div
    className="
    rounded-3xl
    border
    border-[var(--border)]
    p-6
    "
  >
    <p className="text-sm text-[var(--warm-grey)]">
      Status
    </p>

    <p className="mt-2 text-2xl">
      {project.status}
    </p>
  </div>

  <div
    className="
    rounded-3xl
    border
    border-[var(--border)]
    p-6
    "
  >
    <p className="text-sm text-[var(--warm-grey)]">
      Category
    </p>

    <p className="mt-2 text-2xl">
      {project.category}
    </p>
  </div>

</div>

{/* Problem */}

<section className="mt-24">

  <p
    className="
    mb-4
    text-sm
    uppercase
    tracking-[0.25em]
    text-[var(--accent)]
    "
  >
    The Problem
  </p>

  <h2
    className="
    mb-8
    font-[var(--font-cormorant)]
    text-5xl
    font-light
    "
  >
    Understanding The Challenge
  </h2>

  <p
    className="
    max-w-4xl
    text-xl
    leading-loose
    text-[var(--warm-grey)]
    "
  >
    {project.problem}
  </p>

</section>

{/* Solution */}

<section className="mt-24">

  <p
    className="
    mb-4
    text-sm
    uppercase
    tracking-[0.25em]
    text-[var(--accent)]
    "
  >
    The Solution
  </p>

  <h2
    className="
    mb-8
    font-[var(--font-cormorant)]
    text-5xl
    font-light
    "
  >
    Building The System
  </h2>

  <p
    className="
    max-w-4xl
    text-xl
    leading-loose
    text-[var(--warm-grey)]
    "
  >
    {project.solution}
  </p>

</section>

{/* Impact */}

<section className="mt-24">

  <p
    className="
    mb-4
    text-sm
    uppercase
    tracking-[0.25em]
    text-[var(--accent)]
    "
  >
    Impact
  </p>

  <h2
    className="
    mb-8
    font-[var(--font-cormorant)]
    text-5xl
    font-light
    "
  >
    Why It Matters
  </h2>

  <p
    className="
    max-w-4xl
    text-xl
    leading-loose
    text-[var(--warm-grey)]
    "
  >
    {project.impact}
  </p>

</section>

{/* Results */}

<section className="mt-24">

  <p
    className="
    mb-4
    text-sm
    uppercase
    tracking-[0.25em]
    text-[var(--accent)]
    "
  >
    Results
  </p>

  <h2
    className="
    mb-10
    font-[var(--font-cormorant)]
    text-5xl
    font-light
    "
  >
    Key Outcomes
  </h2>

  <div className="grid gap-4">

    {project.results.map((result) => (
      <div
        key={result}
        className="
        rounded-2xl
        border
        border-[var(--border)]
        p-6
        "
      >
        ✓ {result}
      </div>
    ))}

  </div>

</section>

{/* Tech Stack */}

<section className="mt-24">

  <p
    className="
    mb-4
    text-sm
    uppercase
    tracking-[0.25em]
    text-[var(--accent)]
    "
  >
    Technologies
  </p>

  <h2
    className="
    mb-10
    font-[var(--font-cormorant)]
    text-5xl
    font-light
    "
  >
    Tech Stack
  </h2>

  <div className="flex flex-wrap gap-4">

    {project.technologies.map((tech) => (
      <span
        key={tech}
        className="
        rounded-full
        border
        border-[var(--border)]
        px-5
        py-3
        "
      >
        {tech}
      </span>
    ))}

  </div>

</section>
      </main>

      <Footer />
    </>
  );
}