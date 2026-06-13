import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Research | Prathamesh Bhil",
  description:
    "Research initiatives in artificial intelligence, cybersecurity, cognitive science, and autonomous systems.",
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="py-32">

        <div className="container-custom">

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
              Research & Innovation
            </p>

            <h1
              className="
              font-[var(--font-cormorant)]
              text-6xl
              font-light
              leading-[0.95]
              md:text-8xl
              "
            >
              Exploring The Future
              Through Research.
            </h1>

            <p
              className="
              mt-10
              max-w-3xl
              text-xl
              leading-relaxed
              text-[var(--warm-grey)]
              "
            >
              My research focuses on artificial intelligence,
              cybersecurity, cognitive science and autonomous
              systems. I am particularly interested in building
              practical solutions that bridge academic research
              with real-world impact.
            </p>

          </div>

          {/* Research Areas */}

          <section className="mt-32">

            <p
              className="
              mb-4
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              "
            >
              Research Areas
            </p>

            <h2
              className="
              mb-12
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              "
            >
              Fields Of Interest
            </h2>

            <div
              className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
              "
            >

              <div className="rounded-3xl border border-[var(--border)] p-8">
                <h3 className="mb-4 text-2xl">
                  Artificial Intelligence
                </h3>

                <p className="text-[var(--warm-grey)]">
                  AI systems, reasoning models,
                  intelligent agents and autonomous workflows.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] p-8">
                <h3 className="mb-4 text-2xl">
                  Cybersecurity
                </h3>

                <p className="text-[var(--warm-grey)]">
                  Security automation, threat intelligence,
                  defensive systems and cyber resilience.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] p-8">
                <h3 className="mb-4 text-2xl">
                  Cognitive Science
                </h3>

                <p className="text-[var(--warm-grey)]">
                  Human cognition, workload assessment
                  and behavioral analysis.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] p-8">
                <h3 className="mb-4 text-2xl">
                  Autonomous Systems
                </h3>

                <p className="text-[var(--warm-grey)]">
                  Agentic AI, decision-making systems
                  and intelligent automation.
                </p>
              </div>

            </div>

          </section>

          {/* Research Projects */}

          <section className="mt-32">

            <p
              className="
              mb-4
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              "
            >
              Current Research
            </p>

            <h2
              className="
              mb-16
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              "
            >
              Research Initiatives
            </h2>

            <div className="space-y-12">

              {/* Project 1 */}

              <div
                className="
                rounded-3xl
                border
                border-[var(--border)]
                p-10
                "
              >

                <p className="mb-4 text-[var(--accent)]">
                  Cognitive Science • NLP
                </p>

                <h3
                  className="
                  mb-6
                  font-[var(--font-cormorant)]
                  text-4xl
                  font-light
                  "
                >
                  Cognitive Workload Assessment Using NLP
                </h3>

                <p className="mb-8 text-[var(--warm-grey)] leading-loose">
                  Traditional workload assessment often relies on
                  physiological sensors and specialized hardware.
                  This research explores whether cognitive workload
                  can be measured using subjective, behavioral
                  and textual indicators without requiring sensors.
                </p>

                <div className="grid gap-6 md:grid-cols-3">

                  <div>
                    <h4 className="mb-2">Problem</h4>

                    <p className="text-[var(--warm-grey)]">
                      Sensor-based assessments are expensive and
                      difficult to deploy at scale.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2">Goal</h4>

                    <p className="text-[var(--warm-grey)]">
                      Develop an NLP-driven framework for
                      non-invasive workload assessment.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2">Impact</h4>

                    <p className="text-[var(--warm-grey)]">
                      Applications in education, productivity,
                      healthcare, and human-computer interaction.
                    </p>
                  </div>

                </div>

              </div>

              {/* Project 2 */}

              <div
                className="
                rounded-3xl
                border
                border-[var(--border)]
                p-10
                "
              >

                <p className="mb-4 text-[var(--accent)]">
                  Cybersecurity • AI
                </p>

                <h3
                  className="
                  mb-6
                  font-[var(--font-cormorant)]
                  text-4xl
                  font-light
                  "
                >
                  Cosmo Cyber
                </h3>

                <p className="mb-8 text-[var(--warm-grey)] leading-loose">
                  Cosmo Cyber is an indigenous cybersecurity
                  research initiative under Cosmolix focused on
                  developing autonomous security intelligence
                  systems capable of assisting analysts in threat
                  analysis, investigations, and defensive operations.
                </p>

                <div className="grid gap-6 md:grid-cols-3">

                  <div>
                    <h4 className="mb-2">Focus</h4>

                    <p className="text-[var(--warm-grey)]">
                      AI-assisted security operations and
                      autonomous cybersecurity workflows.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2">Research Areas</h4>

                    <p className="text-[var(--warm-grey)]">
                      Agentic AI, threat intelligence,
                      reasoning systems, and automation.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2">Vision</h4>

                    <p className="text-[var(--warm-grey)]">
                      Building indigenous cybersecurity
                      intelligence capabilities through AI.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Future Research */}

          <section className="mt-32">

            <p
              className="
              mb-4
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              "
            >
              Looking Ahead
            </p>

            <h2
              className="
              mb-10
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              "
            >
              Future Research Interests
            </h2>

            <div className="flex flex-wrap gap-4">

              {[
                "AI Security",
                "Agentic AI",
                "Human-AI Collaboration",
                "Cyber Defense Automation",
                "Autonomous Systems",
                "Cognitive Computing",
                "LLM Reasoning",
                "Digital Safety",
              ].map((item) => (
                <span
                  key={item}
                  className="
                  rounded-full
                  border
                  border-[var(--border)]
                  px-5
                  py-3
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}