import { Reveal } from "@/components/shared/reveal";

export function FounderStory() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl">
          {/* Change 2: Animate Section Label */}
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
              Founder Journey
            </p>
          </Reveal>

          {/* Change 3: Animate Main Heading */}
          <Reveal delay={0.1}>
            <h2
              className="
                max-w-4xl
                font-[var(--font-cormorant)]
                text-5xl
                font-light
                leading-[1]
                md:text-7xl
              "
            >
              The Story Behind The Builder
            </h2>
          </Reveal>
        </div>

        {/* Story Content */}
        <div
          className="
            mt-20
            grid
            gap-16
            lg:grid-cols-[250px_1fr]
          "
        >
          {/* Change 4: Create Story Timeline Spine (Left Side) */}
          <div className="relative">
            <div
              className="
                absolute
                left-2
                top-10
                h-full
                w-[2px]
                bg-gradient-to-b
                from-[var(--accent)]
                via-[var(--accent)]
                to-transparent
              "
            />

            <p
              className="
                relative
                z-10
                text-sm
                uppercase
                tracking-[0.25em]
                text-[var(--warm-grey)]
              "
            >
              2005 — Present
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-20">
            {/* Change 5, 6 & 7: Chapter 1 (Curiosity) with Marker Dot, Animation & Hover Lift */}
            <Reveal delay={0.1}>
              <div
                className="
                  relative
                  pl-10
                  transition-all
                  duration-500
                  hover:translate-x-2
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    top-4
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                  "
                />
                <h3
                  className="
                    mb-6
                    font-[var(--font-cormorant)]
                    text-4xl
                    font-light
                  "
                >
                  Curiosity
                </h3>

                <p
                  className="
                    text-lg
                    leading-loose
                    text-[var(--warm-grey)]
                  "
                >
                  I grew up in a family where education, discipline and hard
                  work were deeply valued. My father, a teacher, constantly
                  encouraged me to think beyond limitations and believe that
                  meaningful impact comes from continuous learning and
                  persistence. Those lessons would later influence how I
                  approach technology, leadership and entrepreneurship.
                </p>
              </div>
            </Reveal>

            {/* Change 5, 6 & 7: Chapter 2 (Taking Risks) with Marker Dot, Animation & Hover Lift */}
            <Reveal delay={0.2}>
              <div
                className="
                  relative
                  pl-10
                  transition-all
                  duration-500
                  hover:translate-x-2
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    top-4
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                  "
                />
                <h3
                  className="
                    mb-6
                    font-[var(--font-cormorant)]
                    text-4xl
                    font-light
                  "
                >
                  Taking Risks
                </h3>

                <p
                  className="
                    text-lg
                    leading-loose
                    text-[var(--warm-grey)]
                  "
                >
                  After completing my schooling in Shegaon, I made a decision
                  that surprised many people around me. Instead of following the
                  traditional academic path, I chose to pursue a Diploma in
                  Computer Science and Engineering. That decision meant leaving
                  my hometown and moving to Pune at a young age. It was
                  uncomfortable, challenging and life-changing.
                </p>
              </div>
            </Reveal>

            {/* Change 5, 6 & 7: Chapter 3 (Discovering Technology) with Marker Dot, Animation & Hover Lift */}
            <Reveal delay={0.3}>
              <div
                className="
                  relative
                  pl-10
                  transition-all
                  duration-500
                  hover:translate-x-2
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    top-4
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                  "
                />
                <h3
                  className="
                    mb-6
                    font-[var(--font-cormorant)]
                    text-4xl
                    font-light
                  "
                >
                  Discovering Technology
                </h3>

                <p
                  className="
                    text-lg
                    leading-loose
                    text-[var(--warm-grey)]
                  "
                >
                  My curiosity gradually evolved into a deep fascination with
                  cybersecurity, networking, software development and systems.
                  During this period, I joined Team UCC, explored ethical
                  hacking and gained practical exposure to the security world. I
                  also completed my first internship as a Java Full Stack
                  Developer at MicroSpectra Software Technologies.
                </p>
              </div>
            </Reveal>

            {/* Change 5, 6 & 7: Chapter 4 (Building Impact) with Marker Dot, Animation & Hover Lift */}
            <Reveal delay={0.4}>
              <div
                className="
                  relative
                  pl-10
                  transition-all
                  duration-500
                  hover:translate-x-2
                "
              >
                <div
                  className="
                    absolute
                    left-0
                    top-4
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                  "
                />
                <h3
                  className="
                    mb-6
                    font-[var(--font-cormorant)]
                    text-4xl
                    font-light
                  "
                >
                  Building Impact
                </h3>

                <p
                  className="
                    text-lg
                    leading-loose
                    text-[var(--warm-grey)]
                  "
                >
                  While pursuing my B.Tech in Computer Science and Engineering
                  at JSPM University, I observed a recurring challenge: talented
                  students and businesses often lacked access to the right
                  guidance, technology and opportunities. That realization led
                  me to establish the JSPM Coding Club, build developer
                  communities and eventually co-found Cosmolix Pvt Ltd. Together
                  with my business partner Dhanesh Shingade, I launched Cosmolix
                  with a vision to create meaningful technology solutions, empower
                  future innovators and bridge the gap between education, industry
                  and innovation.
                </p>
              </div>
            </Reveal>

            {/* Change 8: Quote Animation & Border Interaction */}
            <Reveal delay={0.5}>
              <div
                className="
                  border-l-2
                  border-[var(--accent)]
                  pl-8
                  transition-all
                  duration-500
                  hover:border-[var(--accent)]
                "
              >
                <p
                  className="
                    font-[var(--font-cormorant)]
                    text-3xl
                    font-light
                    italic
                  "
                >
                  “The journey started with curiosity. Today, that same curiosity
                  drives every company, community and product I build.”
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}