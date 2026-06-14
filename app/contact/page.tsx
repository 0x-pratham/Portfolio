import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact/contact-form";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/shared/reveal";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Prathamesh Bhil, Founder & CEO of Cosmolix Pvt Ltd.",
};

export default function ContactPage() {
  const socials = [
    {
      label: "LinkedIn",
      href: siteConfig.socialLinks.linkedin,
      icon: FaLinkedinIn,
    },
    {
      label: "GitHub",
      href: siteConfig.socialLinks.github,
      icon: FaGithub,
    },
    {
      label: "X",
      href: siteConfig.socialLinks.twitter,
      icon: FaXTwitter,
    },
    {
      label: "Instagram",
      href: siteConfig.socialLinks.instagram,
      icon: FaInstagram,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="relative py-32 overflow-hidden">
        {/* Hero Background Enhancement */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-10
          "
          style={{
            background:
              "radial-gradient(circle at top left, rgba(139,92,246,0.2), transparent 60%)",
          }}
        />

        <div className="container-custom relative z-10">

          {/* Hero */}

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
                Contact
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
                Let's Build<br />
                Something Meaningful.
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
                I'm always open to discussing
                technology, startups, research,
                cybersecurity, collaborations,
                and innovative ideas that create
                real-world impact.
              </p>
            </Reveal>

          </div>

          {/* Main Content */}

          <div
            className="
              mt-24
              grid
              gap-16
              lg:grid-cols-[1fr_350px]
            "
          >

            {/* Main Form Entry */}
            <Reveal delay={0.1}>
              <div>
                {/* Premium Detail Note */}
                <p className="mb-6 text-sm text-[var(--warm-grey)] italic">
                  Usually responds within 24 hours
                </p>
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar Sticky Area */}
            <Reveal delay={0.2}>
              <aside
                className="
                  h-fit
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-500
                  hover:border-[var(--accent)]
                  lg:sticky
                  lg:top-28
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

                <div className="space-y-8">

                  <div>
                    <p className="mb-2 text-sm text-[var(--warm-grey)]">
                      Email
                    </p>

                    <a
                      href="mailto:contact@cosmolix.co.in"
                      className="group inline-flex items-center gap-1 hover:text-[var(--accent)]"
                    >
                      <span>info@cosmolix.co.in</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>

                  <div>
                    <p className="mb-4 text-sm text-[var(--warm-grey)]">
                      Connect
                    </p>

                    <div className="flex flex-wrap gap-4">

                      {socials.map((social) => {
                        const Icon = social.icon;

                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
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
                              hover:shadow-[0_10px_25px_rgba(139,92,246,0.12)]
                            "
                          >
                            <Icon size={18} />
                          </a>
                        );
                      })}

                    </div>
                  </div>

                </div>

              </aside>
            </Reveal>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}