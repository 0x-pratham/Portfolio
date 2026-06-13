import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

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
    <footer className="border-t border-[var(--border)] py-24">
      <div className="container-custom">
        {/* Brand */}
        <div className="max-w-4xl">
          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.35em]
              text-accent
            "
          >
            PRATHAMESH BHIL
          </p>

          <h2
            className="
              text-4xl
              font-light
              leading-tight
              md:text-5xl
            "
          >
            Founder, Engineer &
            Technology Builder.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-muted
              leading-relaxed
            "
          >
            Founder & CEO of Cosmolix Pvt Ltd,
            creator of GenXCode, researcher,
            software engineer, and cybersecurity
            enthusiast focused on building
            impactful technology solutions.
          </p>
        </div>

        {/* Navigation */}
        <div
          className="
            mt-16
            flex
            flex-wrap
            gap-8
            text-sm
            uppercase
            tracking-[0.15em]
          "
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                text-muted
                transition-colors
                duration-300
                hover:text-accent
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
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
                className="
                  text-muted
                  transition-all
                  duration-300
                  hover:text-accent
                  hover:scale-110
                "
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        {/* Bottom */}
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
      </div>
    </footer>
  );
}