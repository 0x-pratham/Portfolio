import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { ContactForm } from "@/components/contact/contact-form";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Prathamesh Bhil",

  description:
    "Get in touch with Prathamesh Bhil, Founder & CEO of Cosmolix Pvt Ltd.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="py-32">
        <div className="container-custom">

          {/* Hero */}

          <div className="mb-24 max-w-5xl">

            <p
              className="
              mb-4
              text-sm
              uppercase
              tracking-[0.35em]
              text-[var(--accent)]
              "
            >
              Contact
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
              Let's Start A
              Conversation.
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
              Whether you're looking to build a
              product, collaborate on a project,
              discuss technology, explore
              entrepreneurship or create
              meaningful opportunities, I'd love
              to hear from you.
            </p>

          </div>

          {/* Content */}

          <div
            className="
            grid
            gap-16
            lg:grid-cols-[1fr_320px]
            "
          >

            {/* Form */}

            <ContactForm />

            {/* Contact Info */}

            <aside
  className="
  h-fit
  rounded-3xl
  border
  border-[var(--border)]
  bg-[var(--surface)]
  p-8
  "
>

  <p
    className="
    mb-8
    text-sm
    uppercase
    tracking-[0.25em]
    text-[var(--accent)]
    "
  >
    Direct Contact
  </p>

  {/* Email */}

  <div className="mb-10">
    <p
      className="
      mb-2
      text-sm
      text-[var(--warm-grey)]
      "
    >
      Email
    </p>

    <a
      href="mailto:contact@cosmolix.co.in"
      className="
      transition-colors
      hover:text-[var(--accent)]
      "
    >
      contact@cosmolix.co.in
    </a>
  </div>

  {/* Socials */}

  <div>

    <p
      className="
      mb-4
      text-sm
      text-[var(--warm-grey)]
      "
    >
      Connect
    </p>

    <div className="flex flex-wrap gap-4">

      {/* LinkedIn */}

      <a
        href="YOUR_LINKEDIN_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
        rounded-full
        border
        border-[var(--border)]
        p-3

        transition-all
        duration-300

        hover:border-[var(--accent)]
        hover:text-[var(--accent)]
        hover:-translate-y-1
        "
      >
        <FaLinkedinIn size={18} />
      </a>

      {/* GitHub */}

      <a
        href="YOUR_GITHUB_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="
        rounded-full
        border
        border-[var(--border)]
        p-3

        transition-all
        duration-300

        hover:border-[var(--accent)]
        hover:text-[var(--accent)]
        hover:-translate-y-1
        "
      >
        <FaGithub size={18} />
      </a>

      {/* X */}

      <a
        href="YOUR_X_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="
        rounded-full
        border
        border-[var(--border)]
        p-3

        transition-all
        duration-300

        hover:border-[var(--accent)]
        hover:text-[var(--accent)]
        hover:-translate-y-1
        "
      >
        <FaXTwitter size={18} />
      </a>

      {/* Instagram */}

      <a
        href="YOUR_INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
        rounded-full
        border
        border-[var(--border)]
        p-3

        transition-all
        duration-300

        hover:border-[var(--accent)]
        hover:text-[var(--accent)]
        hover:-translate-y-1
        "
      >
        <FaInstagram size={18} />
      </a>

    </div>

    <div
  className="
  mt-10
  border-t
  border-[var(--border)]
  pt-8
  "
>
  <p
    className="
    text-sm
    leading-relaxed
    text-[var(--warm-grey)]
    "
  >
    Open to collaborations,
    startup discussions,
    technology partnerships,
    speaking opportunities
    and community initiatives.
  </p>
</div>

  </div>

</aside>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}