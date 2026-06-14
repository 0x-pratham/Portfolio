import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/shared/reveal";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      href: siteConfig.socialLinks.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      href: siteConfig.socialLinks.github,
      icon: FaGithub,
    },
    {
      name: "X",
      href: siteConfig.socialLinks.twitter,
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      href: siteConfig.socialLinks.instagram,
      icon: FaInstagram,
    },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    /* CHANGE 5: Premium Footer Spacing */
    <footer className="border-t border-[var(--border)] py-32">
      <div className="container-custom">
        {/* Brand */}
        {/* CHANGE 2: Footer Reveal Wrap */}
        <Reveal>
          <div className="max-w-2xl">
            {/* CHANGE 4: Editorial Typography */}
            <h2
              className="
                font-[var(--font-cormorant)]
                text-5xl
                font-light
                md:text-6xl
              "
            >
              {siteConfig.name}
            </h2>

            <p className="mt-4 text-muted max-w-md leading-relaxed">
              Building software, communities, and technology ventures that
              create meaningful real-world impact.
            </p>
          </div>
        </Reveal>

        {/* Links Navigation */}
        {/* CHANGE 2: Navigation Reveal Wrap */}
        <Reveal delay={0.1}>
          <div
            className="
              mt-16
              flex
              flex-wrap
              items-center
              gap-x-10
              gap-y-4
            "
          >
            {navigation.map((item) => (
              /* CHANGE 3: Navigation Underline Interaction Engine */
              <Link
                key={item.name}
                href={item.href}
                className="
                  group
                  relative
                  text-sm
                  uppercase
                  tracking-wider
                  text-muted
                  transition-colors
                  duration-300
                  hover:text-accent
                "
              >
                {item.name}
                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-0
                    bg-accent
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Social Icons */}
        {/* CHANGE 2: Social Icons Reveal Wrap */}
        <Reveal delay={0.2}>
          <div
            className="
              mt-10
              flex
              items-center
              gap-5
            "
          >
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  /* CHANGE 1: Social Icon Lift Vectors */
                  className="
                    text-muted
                    transition-all
                    duration-300
                    hover:text-accent
                    hover:scale-110
                    hover:-translate-y-1
                  "
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* Bottom */}
        {/* CHANGE 2: Bottom Bar Reveal Wrap */}
        <Reveal delay={0.3}>
          <div
            className="
              mt-20
              border-t
              border-[var(--border)]
              pt-8
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Prathamesh Bhil.
              All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}