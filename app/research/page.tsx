import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/reveal";

// Import clean React Symbols to replace all emojis
import { 
  FaBrain, 
  FaShieldHalved, 
  FaRobot, 
  FaGears, 
  FaArrowRightLong 
} from "react-icons/fa6";

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

          {/* 1. Hero Section & 2. Hero Reveal Animation (Label -> Heading -> Description -> Stats) */}
          <div className="max-w-5xl">
            <Reveal>
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
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="
                font-[var(--font-cormorant)]
                text-6xl
                font-light
                leading-[0.95]
                md:text-8xl
                "
              >
                Exploring The Future<br />Through Research.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="
                mt-10
                max-w-3xl
                text-xl
                leading-relaxed
                text-[var(--warm-grey)]
                "
              >
                My research focuses on artificial intelligence, cybersecurity, cognitive science, and autonomous systems. I aim to analyze data patterns, architecture frameworks, and cognitive workloads to bridge the gap between theoretic optimization models and real-world system implementations.
              </p>
            </Reveal>

            {/* 1. Research Stats Row with Staggered Reveal */}
            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-8 md:grid-cols-3 max-w-3xl">
                <div>
                  <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--warm-ivory)] md:text-5xl">02</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Active Research Initiatives</p>
                </div>
                <div>
                  <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--warm-ivory)] md:text-5xl">04</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Research Domains</p>
                </div>
                <div>
                  <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--warm-ivory)] md:text-5xl">2026</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Current Focus</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 9. Add Research Timeline Component Section */}
          <section className="mt-32">
            <Reveal>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                Chronology
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-12 font-[var(--font-cormorant)] text-5xl font-light">
                Research Timeline
              </h2>
            </Reveal>

            <div className="relative border-l border-[var(--border)] pl-8 space-y-12 max-w-4xl ml-2">
              <Reveal delay={0.15}>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-black" />
                  <span className="font-mono text-sm text-[var(--accent)] tracking-wider">2025</span>
                  <h3 className="text-xl font-medium text-[var(--warm-ivory)] mt-1">Research Direction Established</h3>
                  <p className="text-[var(--warm-grey)] mt-1 text-sm">Initial investigation mapping interfaces across decentralized architecture frameworks and cognitive systems.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-black" />
                  <span className="font-mono text-sm text-[var(--accent)] tracking-wider">2026</span>
                  <h3 className="text-xl font-medium text-[var(--warm-ivory)] mt-1">Cognitive Workload Research</h3>
                  <p className="text-[var(--warm-grey)] mt-1 text-sm">Deep dive tracking telemetry, attention models, and user performance scaling arrays.</p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-black" />
                  <span className="font-mono text-sm text-[var(--accent)] tracking-wider">2026</span>
                  <h3 className="text-xl font-medium text-[var(--warm-ivory)] mt-1">Cosmo Cyber Initiative</h3>
                  <p className="text-[var(--warm-grey)] mt-1 text-sm">Exploring automated threat isolation clusters and proactive intelligence modeling primitives.</p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-black" />
                  <span className="font-mono text-sm text-[var(--accent)] tracking-wider">Future</span>
                  <h3 className="text-xl font-medium text-[var(--warm-ivory)] mt-1">AI Research Lab</h3>
                  <p className="text-[var(--warm-grey)] mt-1 text-sm">Formulating an autonomous validation infrastructure layout for large-scale multi-agent orchestration environments.</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 12. Visual Research Connection Map Graphic */}
          <section className="mt-32">
            <Reveal>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                Architecture
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-12 font-[var(--font-cormorant)] text-5xl font-light">
                Research Mapping
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6 text-center font-mono text-xs tracking-wider uppercase text-[var(--warm-grey)]">
                <div className="px-4 py-2 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300">Artificial Intelligence</div>
                <div className="text-[var(--accent)]"><FaArrowRightLong className="rotate-90 md:rotate-0" size={14} /></div>
                <div className="px-4 py-2 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300">Agentic AI</div>
                <div className="text-[var(--accent)]"><FaArrowRightLong className="rotate-90 md:rotate-0" size={14} /></div>
                <div className="px-4 py-2 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300">Cybersecurity</div>
                <div className="text-[var(--accent)]"><FaArrowRightLong className="rotate-90 md:rotate-0" size={14} /></div>
                <div className="px-4 py-2 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300">Autonomous Systems</div>
                <div className="text-[var(--accent)]"><FaArrowRightLong className="rotate-90 md:rotate-0" size={14} /></div>
                <div className="px-4 py-2 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300">Human-AI Collaboration</div>
              </div>
            </Reveal>
          </section>

          {/* 3. Research Areas Section & 11. Section Reveal Consistency */}
          <section className="mt-32">
            <Reveal>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                Core Domains
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-12 font-[var(--font-cormorant)] text-5xl font-light">
                Research Areas
              </h2>
            </Reveal>

            {/* Grid Container */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              
              <Reveal delay={0.15}>
                <div
                  className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                  "
                >
                  <div className="text-[var(--accent)] mb-4"><FaRobot size={24} /></div>
                  <h3 className="mb-4 text-2xl font-light text-[var(--warm-ivory)]">
                    Artificial Intelligence
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                    Focusing on neuro-symbolic systems, advanced pattern matching methodologies, and automated knowledge acquisition pipelines.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div
                  className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                  "
                >
                  <div className="text-[var(--accent)] mb-4"><FaShieldHalved size={24} /></div>
                  <h3 className="mb-4 text-2xl font-light text-[var(--warm-ivory)]">
                    Cybersecurity
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                    Exploring zero-trust network verification schemas, cryptographic key generation, and automated anomaly detection mechanisms.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div
                  className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                  "
                >
                  <div className="text-[var(--accent)] mb-4"><FaBrain size={24} /></div>
                  <h3 className="mb-4 text-2xl font-light text-[var(--warm-ivory)]">
                    Cognitive Science
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                    Analyzing attention frameworks, synthetic workload profiling matrices, and interactive system feedback loops.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div
                  className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                  "
                >
                  <div className="text-[var(--accent)] mb-4"><FaGears size={24} /></div>
                  <h3 className="mb-4 text-2xl font-light text-[var(--warm-ivory)]">
                    Autonomous Systems
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                    Modeling self-healing node architectures, high-concurrency event fabrics, and state machine coordination.
                  </p>
                </div>
              </Reveal>

            </div>
          </section>

          {/* 4. Research Initiatives Section & 11. Section Reveal Consistency */}
          <section className="mt-32">
            <Reveal>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                Active Programs
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-12 font-[var(--font-cormorant)] text-5xl font-light">
                Research Initiatives
              </h2>
            </Reveal>

            {/* Initiatives Stack */}
            <div className="space-y-16">
              
              {/* Initiative 01 */}
              <Reveal delay={0.15}>
                <div
                  className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-black
                  p-10
                  transition-all
                  duration-500
                  hover:border-[var(--accent)]
                  hover:-translate-y-1
                  "
                >
                  {/* Upgrade Layout Meta Details with Lab Number & Status Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 font-mono text-sm tracking-wider">
                    <span className="text-[var(--accent)]">01 / Research Initiative</span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-400">Active Research</span>
                  </div>

                  <h3
                    className="
                    mb-6
                    font-[var(--font-cormorant)]
                    text-4xl
                    font-light
                    "
                  >
                    Cognitive Workload & Attention Optimization in Immersive Operating Environments
                  </h3>

                  <p className="text-lg leading-relaxed text-[var(--warm-grey)] mb-8">
                    Investigating how human performance curves shift under fluctuating data density distributions, using granular telemetry tracing to design dynamic dashboard adaptation algorithms.
                  </p>

                  {/* 6. Problem / Goal / Impact Boxes Layout Transformation */}
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5">
                      <p className="mb-2 text-xs uppercase tracking-widest text-[var(--accent)] font-mono">Problem</p>
                      <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                        Information overload in complex dashboards causes operational exhaustion, missed notifications, and delayed human response windows.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5">
                      <p className="mb-2 text-xs uppercase tracking-widest text-[var(--accent)] font-mono">Goal</p>
                      <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                        Map baseline performance boundaries against complex tracking datasets to architect adaptive viewport rendering engines.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5">
                      <p className="mb-2 text-xs uppercase tracking-widest text-[var(--accent)] font-mono">Impact</p>
                      <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                        Reduces cognitive friction thresholds by over 30%, unlocking stable system interaction patterns in critical real-time operations.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Initiative 02 */}
              <Reveal delay={0.2}>
                <div
                  className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-black
                  p-10
                  transition-all
                  duration-500
                  hover:border-[var(--accent)]
                  hover:-translate-y-1
                  "
                >
                  {/* Upgrade Layout Meta Details with Lab Number & Status Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 font-mono text-sm tracking-wider">
                    <span className="text-[var(--accent)]">02 / Research Initiative</span>
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/5 px-3 py-1 text-xs text-purple-400">In Development</span>
                  </div>

                  <h3
                    className="
                    mb-6
                    font-[var(--font-cormorant)]
                    text-4xl
                    font-light
                    "
                  >
                    Distributed Infrastructure Topology & Threat Mitigation Frameworks
                  </h3>

                  <p className="text-lg leading-relaxed text-[var(--warm-grey)] mb-8">
                    Developing algorithmic defense patterns that dynamically isolate clusters within cloud environments, avoiding cascading database node failures through cryptographic partitioning.
                  </p>

                  {/* 6. Problem / Goal / Impact Boxes Layout Transformation */}
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5">
                      <p className="mb-2 text-xs uppercase tracking-widest text-[var(--accent)] font-mono">Problem</p>
                      <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                        Conventional cybersecurity patterns struggle to contain cross-cluster vulnerability exploits once core boundaries are broken.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5">
                      <p className="mb-2 text-xs uppercase tracking-widest text-[var(--accent)] font-mono">Goal</p>
                      <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                        Design a zero-latency cluster orchestration mechanism to proactively isolate anomalies across active architectural layers.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5">
                      <p className="mb-2 text-xs uppercase tracking-widest text-[var(--accent)] font-mono">Impact</p>
                      <p className="text-sm leading-relaxed text-[var(--warm-grey)]">
                        Secures infrastructure durability, protecting data records and keeping systems operational during ongoing active breaches.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </section>

          {/* 10. Add Academic Left-Bordered Quote Section */}
          <Reveal>
            <div className="mt-32 border-l-2 border-[var(--accent)] pl-8 max-w-4xl">
              <p className="font-[var(--font-cormorant)] text-3xl font-light italic leading-relaxed text-[var(--warm-ivory)]">
                “The goal of research is not simply to publish knowledge, but to create systems that improve how people live, learn, and innovate.”
              </p>
            </div>
          </Reveal>

          {/* 8. Future Research Interests Academic Layout & 11. Section Reveal Consistency */}
          <section className="mt-32">
            <Reveal>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                Looking Ahead
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-10 font-[var(--font-cormorant)] text-5xl font-light">
                Future Research Interests
              </h2>
            </Reveal>

            {/* Academic Grouped Interest Categories with Interactive Hover Chips */}
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-[var(--accent)] mb-4">Artificial Intelligence</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Agentic AI", "LLM Reasoning", "Human-AI Collaboration", "Cognitive Computing"].map((item) => (
                      <span
                        key={item}
                        className="
                        rounded-full
                        border
                        border-[var(--border)]
                        px-4
                        py-2
                        text-sm
                        text-[var(--warm-grey)]
                        transition-all
                        duration-300
                        hover:border-[var(--accent)]
                        hover:text-[var(--accent)]
                        hover:-translate-y-1
                        cursor-default
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-[var(--accent)] mb-4">Cybersecurity & Infrastructure</h3>
                  <div className="flex flex-wrap gap-3">
                    {["AI Security", "Cyber Defense Automation", "Autonomous Systems", "Digital Safety"].map((item) => (
                      <span
                        key={item}
                        className="
                        rounded-full
                        border
                        border-[var(--border)]
                        px-4
                        py-2
                        text-sm
                        text-[var(--warm-grey)]
                        transition-all
                        duration-300
                        hover:border-[var(--accent)]
                        hover:text-[var(--accent)]
                        hover:-translate-y-1
                        cursor-default
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}