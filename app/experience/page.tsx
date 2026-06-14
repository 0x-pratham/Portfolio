import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Leadership, entrepreneurship, internships, and technology journey of Prathamesh Bhil.",
};

const timeline = [
  {
    year: "2022",
    tagline: "Learning",
    title: "Team UCC",
    role: "Cybersecurity Learner",
    description:
      "Started exploring ethical hacking, cybersecurity methodologies, penetration testing, and real-world security concepts.",
  },
  {
    year: "2023",
    tagline: "Industry Experience",
    title: "MicroSpectra Software Technologies",
    role: "Java Full Stack Developer Intern",
    description:
      "Worked on enterprise-grade applications and gained practical exposure to software engineering, development workflows, and industry practices.",
  },
  {
    year: "2024",
    tagline: "Community Building",
    title: "JSPM Coding Club",
    role: "Founder",
    description:
      "Established a student technology community focused on practical learning, technical growth, mentorship, and industry readiness.",
  },
  {
    year: "2025",
    tagline: "Ecosystem Creation",
    title: "GenXCode",
    role: "Founder",
    description:
      "Built a technology ecosystem designed to bridge the gap between education and industry through practical learning and innovation.",
  },
  {
    year: "2026",
    tagline: "Entrepreneurship",
    title: "Cosmolix Pvt Ltd",
    role: "Founder & CEO",
    description:
      "Founded a technology company focused on software solutions, education platforms, research initiatives, innovation, and future ventures.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="py-32">
        <div className="container-custom">

          {/* Hero Section */}
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
                Experience & Leadership
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
                The Journey<br />
                So Far.
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
                From cybersecurity enthusiast to
                community builder and entrepreneur,
                every step of the journey has shaped
                my vision for technology, innovation,
                and impact.
              </p>
            </Reveal>

            {/* Credibility Stats Block */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-12 border-t border-[var(--border)] pt-8">
                <div>
                  <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--accent)]">5+</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Major Milestones</p>
                </div>
                <div>
                  <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--accent)]">3+</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Organizations Founded</p>
                </div>
                <div>
                  <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--accent)]">∞</p>
                  <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Future Goals</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Timeline Section */}
          <section className="mt-32">
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
                Timeline
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="
                  mb-16
                  font-[var(--font-cormorant)]
                  text-5xl
                  font-light
                "
              >
                Milestones
              </h2>
            </Reveal>

            <div className="relative">
              {/* Premium Gradient Timeline Spine */}
              <div
                className="
                  absolute
                  left-4
                  top-0
                  h-full
                  w-px
                  bg-gradient-to-b
                  from-[var(--accent)]
                  via-[var(--border)]
                  to-transparent
                "
              />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <div className="group relative pl-16">
                      
                      {/* Micro-interactive Dot */}
                      <div
                        className="
                          absolute
                          left-0
                          top-2
                          h-8
                          w-8
                          rounded-full
                          border
                          border-[var(--accent)]
                          bg-[var(--bg)]
                          transition-all
                          duration-300
                          group-hover:scale-110
                        "
                      />

                      {/* Timeline Milestone Card */}
                      <div
                        className="
                          rounded-3xl
                          border
                          border-[var(--border)]
                          p-8
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-[var(--accent)]
                          hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                        "
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <p
                            className="
                              text-sm
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-[var(--accent)]
                            "
                          >
                            {item.year}
                          </p>
                          {/* Narrative Arc Progression Hook */}
                          <span className="text-xs uppercase tracking-widest text-[var(--warm-grey)] bg-white/[0.03] border border-[var(--border)] px-2.5 py-1 rounded-md">
                            {item.tagline}
                          </span>
                        </div>

                        <h3
                          className="
                            mb-2
                            font-[var(--font-cormorant)]
                            text-4xl
                          "
                        >
                          {item.title}
                        </h3>

                        <p className="mb-4 text-lg text-[var(--warm-grey)]">
                          {item.role}
                        </p>

                        <p
                          className="
                            leading-loose
                            text-[var(--warm-grey)]
                          "
                        >
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="mt-32">
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
                Leadership
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="
                  mb-10
                  font-[var(--font-cormorant)]
                  text-5xl
                  font-light
                "
              >
                Building Communities.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-l-2 border-[var(--accent)] pl-8">
                <p
                  className="
                    max-w-4xl
                    text-xl
                    leading-loose
                    text-[var(--warm-grey)]
                  "
                >
                  Leadership is not about titles.
                  It is about creating opportunities,
                  empowering people, and helping
                  others grow. Through JSPM Coding Club
                  and GenXCode, I have focused on
                  building communities where students
                  can learn, collaborate, and gain
                  practical industry exposure.
                </p>
              </div>
            </Reveal>
          </section>

          {/* Entrepreneurship Section */}
          <section className="mt-32">
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
                Entrepreneurship
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="
                  mb-10
                  font-[var(--font-cormorant)]
                  text-5xl
                  font-light
                "
              >
                Building Beyond Projects.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-10
                "
              >
                <p
                  className="
                    max-w-4xl
                    text-xl
                    leading-loose
                    text-[var(--warm-grey)]
                  "
                >
                  Entrepreneurship allows me to
                  transform ideas into systems that
                  create lasting value. Through
                  Cosmolix Pvt Ltd, my goal is to
                  build products, communities,
                  educational initiatives, and
                  research ventures that contribute
                  to technology and innovation.
                </p>
              </div>
            </Reveal>
          </section>

          {/* Looking Forward Section */}
          <section className="mt-32">
            <Reveal>
              <div
                className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  p-10
                  transition-all
                  duration-500
                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.06)]
                "
              >
                <p
                  className="
                    mb-4
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-[var(--accent)]
                  "
                >
                  Looking Forward
                </p>

                <h2
                  className="
                    mb-8
                    font-[var(--font-cormorant)]
                    text-5xl
                    font-light
                  "
                >
                  The Road Ahead
                </h2>

                <p
                  className="
                    max-w-4xl
                    text-xl
                    leading-loose
                    text-[var(--warm-grey)]
                  "
                >
                  My focus remains on building
                  technology, empowering communities,
                  advancing research, and creating
                  an ecosystem of innovation through
                  Cosmolix, GenXCode, and future
                  ventures.
                </p>
              </div>
            </Reveal>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}