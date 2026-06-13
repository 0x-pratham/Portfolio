export function FounderStory() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="max-w-5xl">

          {/* Label */}
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

          {/* Heading */}
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
            The Story Behind
            The Builder
          </h2>

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

          {/* Left Side */}
          <div>
            <p
              className="
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

            {/* Chapter 1 */}
            <div>
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
                I grew up in a family where education,
                discipline and hard work were deeply valued.

                My father, a teacher, constantly encouraged
                me to think beyond limitations and believe
                that meaningful impact comes from continuous
                learning and persistence.

                Those lessons would later influence how I
                approach technology, leadership and
                entrepreneurship.
              </p>
            </div>

            {/* Chapter 2 */}
            <div>
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
                After completing my schooling in
                Shegaon, I made a decision that
                surprised many people around me.

                Instead of following the traditional
                academic path, I chose to pursue a
                Diploma in Computer Science and
                Engineering.

                That decision meant leaving my
                hometown and moving to Pune at a
                young age. It was uncomfortable,
                challenging and life-changing.
              </p>
            </div>

            {/* Chapter 3 */}
            <div>
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
                My curiosity gradually evolved into
                a deep fascination with cybersecurity,
                networking, software development and
                systems.

                During this period, I joined Team UCC,
                explored ethical hacking and gained
                practical exposure to the security
                world.

                I also completed my first internship
                as a Java Full Stack Developer at
                MicroSpectra Software Technologies.
              </p>
            </div>

            {/* Chapter 4 */}
            <div>
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
                While pursuing my B.Tech in Computer
                Science and Engineering at JSPM University,
                I observed a recurring challenge: talented
                students and businesses often lacked access
                to the right guidance, technology and
                opportunities.

                That realization led me to establish the
                JSPM Coding Club, build developer
                communities and eventually co-found
                Cosmolix Pvt Ltd.

                Together with my business partner Dhanesh
                Shingade, I launched Cosmolix with a vision
                to create meaningful technology solutions,
                empower future innovators and bridge the
                gap between education, industry and
                innovation.
              </p>
            </div>

            {/* Final Quote */}
            <div
              className="
              border-l-2
              border-[var(--accent)]
              pl-8
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
                “The journey started with curiosity.
                Today, that same curiosity drives
                every company, community and product
                I build.”
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}