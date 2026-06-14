import { notFound } from "next/navigation";
import Link from "next/link";

import { projects } from "@/data/projects";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";

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

      <main className="pt-10 pb-24">
        <div className="container-custom">

          {/* Hero Header Section with Reveal Sequence */}
          <div className="mb-16">
            <Reveal>
              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-[var(--accent)]
                "
              >
                {project.category}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="
                  mb-8
                  font-[var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-none
                  md:text-7xl
                "
              >
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
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
            </Reveal>
          </div>

          {/* Meta Cards Overview Section */}
          <div className="mb-24 grid gap-4 grid-cols-2 md:grid-cols-4">
            
            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                p-6
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:-translate-y-1
              "
            >
              <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mb-2">
                Year
              </p>
              <p className="text-lg font-medium text-[var(--warm-ivory)]">
                {project.year}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                p-6
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:-translate-y-1
              "
            >
              <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mb-2">
                Status
              </p>
              <p className="text-lg font-medium text-[var(--warm-ivory)]">
                {project.status}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                p-6
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:-translate-y-1
              "
            >
              <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mb-2">
                Category
              </p>
              <p className="text-lg font-medium text-[var(--warm-ivory)]">
                {project.category}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                p-6
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:-translate-y-1
              "
            >
              <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mb-2">
                Role
              </p>
              <p className="text-lg font-medium text-[var(--warm-ivory)]">
                Lead / Creator
              </p>
            </div>

          </div>

          {/* Core Case Study Content Layout with Sticky Sidebar Navigation */}
          <div className="grid gap-16 lg:grid-cols-[1fr_250px]">
            
            {/* Content Left Column */}
            <div className="space-y-24">
              
              {/* Problem Section */}
              <section id="problem" className="scroll-mt-32">
                <Reveal>
                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                    Problem
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mb-10 font-[var(--font-cormorant)] text-5xl font-light">
                    The Challenge
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="border-l-2 border-[var(--accent)] pl-8">
                    <p className="max-w-4xl text-xl leading-loose text-[var(--warm-grey)]">
                      {project.problem}
                    </p>
                  </div>
                </Reveal>
              </section>

              {/* Solution Section */}
              <section id="solution" className="scroll-mt-32">
                <Reveal>
                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                    Solution
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mb-10 font-[var(--font-cormorant)] text-5xl font-light">
                    The Approach
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="border-l-2 border-[var(--accent)] pl-8">
                    <p className="max-w-4xl text-xl leading-loose text-[var(--warm-grey)]">
                      {project.solution}
                    </p>
                  </div>
                </Reveal>
              </section>

              {/* Impact Section */}
              <section id="impact" className="scroll-mt-32">
                <Reveal>
                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                    Impact
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mb-10 font-[var(--font-cormorant)] text-5xl font-light">
                    Real-World Value
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="border-l-2 border-[var(--accent)] pl-8">
                    <p className="max-w-4xl text-xl leading-loose text-[var(--warm-grey)]">
                      {project.impact}
                    </p>
                  </div>
                </Reveal>
              </section>

              {/* Results Section */}
              {project.results && project.results.length > 0 && (
                <section id="results" className="scroll-mt-32">
                  <Reveal>
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                      Results
                    </p>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="mb-10 font-[var(--font-cormorant)] text-5xl font-light">
                      Key Outcomes
                    </h2>
                  </Reveal>
                  <div className="grid gap-4">
                    {project.results.map((result, idx) => (
                      <Reveal key={result} delay={idx * 0.05}>
                        <div
                          className="
                            flex
                            items-start
                            gap-6
                            rounded-2xl
                            border
                            border-[var(--border)]
                            p-6
                            transition-all
                            duration-300
                            hover:border-[var(--accent)]
                            hover:translate-x-1
                          "
                        >
                          <span className="font-mono text-sm tracking-wider text-[var(--accent)] pt-1">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div className="text-[var(--warm-grey)] leading-relaxed">
                            {result}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </section>
              )}

              {/* Tech Stack Section */}
              {project.techStack && project.techStack.length > 0 && (
                <section id="tech-stack" className="scroll-mt-32">
                  <Reveal>
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                      Tech Stack
                    </p>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="mb-10 font-[var(--font-cormorant)] text-5xl font-light">
                      Technologies Used
                    </h2>
                  </Reveal>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, idx) => (
                      <Reveal key={tech} delay={idx * 0.03}>
                        <span
                          className="
                            rounded-full
                            border
                            border-[var(--border)]
                            px-4
                            py-2
                            text-sm
                            transition-all
                            duration-300
                            hover:border-[var(--accent)]
                            hover:text-[var(--accent)]
                            hover:-translate-y-1
                            cursor-default
                          "
                        >
                          {tech}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* Content Right Column: Sticky Sidebar Navigation */}
            <div className="hidden lg:block">
              <nav className="lg:sticky lg:top-24 border-l border-[var(--border)] pl-6 space-y-4 text-sm">
                <p className="text-xs uppercase tracking-widest text-[var(--warm-grey)] font-medium mb-6">
                  Case Study Chapters
                </p>
                <a href="#problem" className="block text-[var(--warm-grey)] hover:text-[var(--accent)] transition-colors duration-200">
                  Problem
                </a>
                <a href="#solution" className="block text-[var(--warm-grey)] hover:text-[var(--accent)] transition-colors duration-200">
                  Solution
                </a>
                <a href="#impact" className="block text-[var(--warm-grey)] hover:text-[var(--accent)] transition-colors duration-200">
                  Impact
                </a>
                {project.results && project.results.length > 0 && (
                  <a href="#results" className="block text-[var(--warm-grey)] hover:text-[var(--accent)] transition-colors duration-200">
                    Results
                  </a>
                )}
                {project.techStack && project.techStack.length > 0 && (
                  <a href="#tech-stack" className="block text-[var(--warm-grey)] hover:text-[var(--accent)] transition-colors duration-200">
                    Tech Stack
                  </a>
                )}
              </nav>
            </div>

          </div>

          {/* End-of-Project Client Conversion CTA Section */}
          <Reveal>
            <div className="mt-32 border-t border-[var(--border)] pt-20 text-center">
              <h3 className="mb-4 font-[var(--font-cormorant)] text-4xl font-light md:text-5xl">
                Interested in building something similar?
              </h3>
              <p className="mx-auto mb-10 max-w-lg text-[var(--warm-grey)]">
                Let's connect to collaborate on advanced architectures or map out your next custom infrastructure implementation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="
                      rounded-full 
                      border 
                      border-[var(--accent)] 
                      px-7 
                      py-4 
                      text-sm
                      text-[var(--warm-ivory)] 
                      transition-all 
                      duration-300 
                      hover:bg-[var(--accent)] 
                      hover:text-black
                    "
                  >
                    Let's Connect
                  </Link>
                </Magnetic>

                <Magnetic>
                  <Link
                    href="/projects"
                    className="
                      rounded-full 
                      border 
                      border-[var(--border)] 
                      px-7 
                      py-4 
                      text-sm
                      transition-all 
                      duration-300 
                      hover:border-[var(--accent)] 
                      hover:text-[var(--accent)]
                    "
                  >
                    View More Projects
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>

        </div>
      </main>

      <Footer />
    </>
  );
}