import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact/contact-form";

import { siteConfig } from "@/lib/site-config";

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
              Let's Build
              Something Meaningful.
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
              I'm always open to discussing
              technology, startups, research,
              cybersecurity, collaborations,
              and innovative ideas that create
              real-world impact.
            </p>

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

            <ContactForm />

            {/* Sidebar */}

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

              <div className="space-y-8">

                <div>
                  <p className="mb-2 text-sm text-[var(--warm-grey)]">
                    Email
                  </p>

                  <a
                    href="mailto:contact@cosmolix.co.in"
                    className="hover:text-[var(--accent)]"
                  >
                    info@cosmolix.co.in
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
                          "
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}

                  </div>
                </div>

                <div>
                  <p className="mb-2 text-sm text-[var(--warm-grey)]">
                    Available For
                  </p>

                  <ul className="space-y-2 text-sm">
                    <li>• Startup Consulting</li>
                    <li>• Software Development</li>
                    <li>• Research Collaborations</li>
                    <li>• Cybersecurity Projects</li>
                    <li>• Community Initiatives</li>
                  </ul>
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