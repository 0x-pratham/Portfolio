import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Experience | Prathamesh Bhil",
  description:
    "Leadership, entrepreneurship, internships, and technology journey of Prathamesh Bhil.",
};
const timeline = [
  {
    year: "2022",
    title: "Team UCC",
    role: "Cybersecurity Learner",
    description:
      "Started exploring ethical hacking, cybersecurity methodologies, penetration testing, and real-world security concepts.",
  },

  {
    year: "2023",
    title: "MicroSpectra Software Technologies",
    role: "Java Full Stack Developer Intern",
    description:
      "Worked on enterprise-grade applications and gained practical exposure to software engineering, development workflows, and industry practices.",
  },

  {
    year: "2024",
    title: "JSPM Coding Club",
    role: "Founder",
    description:
      "Established a student technology community focused on practical learning, technical growth, mentorship, and industry readiness.",
  },

  {
    year: "2025",
    title: "GenXCode",
    role: "Founder",
    description:
      "Built a technology ecosystem designed to bridge the gap between education and industry through practical learning and innovation.",
  },

  {
    year: "2025",
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
    Experience & Leadership
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
    The Journey
    So Far.
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
    From cybersecurity enthusiast to
    community builder and entrepreneur,
    every step of the journey has shaped
    my vision for technology, innovation,
    and impact.
  </p>

</div>

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
    Timeline
  </p>

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

  <div className="relative">

    <div
      className="
      absolute
      left-4
      top-0
      h-full
      w-px
      bg-[var(--border)]
      "
    />

    <div className="space-y-12">

      {timeline.map((item) => (
        <div
          key={item.title}
          className="relative pl-16"
        >

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
            "
          />

          <div
            className="
            rounded-3xl
            border
            border-[var(--border)]
            p-8
            "
          >

            <p
              className="
              mb-2
              text-sm
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
              "
            >
              {item.year}
            </p>

            <h3
              className="
              mb-2
              font-[var(--font-cormorant)]
              text-4xl
              "
            >
              {item.title}
            </h3>

            <p className="mb-4 text-lg">
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
      ))}

    </div>

  </div>

</section>

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
    Leadership
  </p>

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

</section>

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
    Entrepreneurship
  </p>

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

</section>

<section className="mt-32">

  <div
    className="
    rounded-3xl
    border
    border-[var(--border)]
    p-10
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

</section>

        </div>
      </main>

      <Footer />
    </>
  );
}