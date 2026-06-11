import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-[var(--border)]
        py-24
      "
    >
      <div className="container-custom">
        {/* Brand */}

        <p
          className="
            mb-6
            text-sm
            uppercase
            tracking-[0.35em]
            text-accent
          "
        >
          Prathamesh Bhil
        </p>

        <h2
          className="
            max-w-4xl
            text-4xl
            font-light
            leading-tight
            md:text-5xl
          "
        >
          Building software,
          leading communities,
          and creating technology
          that solves real-world problems.
        </h2>

        <p
          className="
            mt-6
            max-w-2xl
            text-muted
            leading-relaxed
          "
        >
          Founder of Cosmolix Pvt Ltd,
          creator of GenXCode, and
          passionate about software
          engineering, cybersecurity
          and innovation.
        </p>

        {/* Navigation */}

        <div
          className="
            mt-20
            flex
            flex-wrap
            gap-8
            text-sm
            uppercase
            tracking-[0.15em]
          "
        >
          <Link
            href="/"
            className="
              text-muted
              transition-colors
              duration-500
              hover:text-accent
            "
          >
            Home
          </Link>

          <Link
            href="/about"
            className="
              text-muted
              transition-colors
              duration-500
              hover:text-accent
            "
          >
            About
          </Link>

          <Link
            href="/projects"
            className="
              text-muted
              transition-colors
              duration-500
              hover:text-accent
            "
          >
            Projects
          </Link>

          <Link
            href="/blog"
            className="
              text-muted
              transition-colors
              duration-500
              hover:text-accent
            "
          >
            Blog
          </Link>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="
              text-muted
              transition-colors
              duration-500
              hover:text-accent
            "
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="
              text-muted
              transition-colors
              duration-500
              hover:text-accent
            "
          >
            GitHub
          </a>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-20
            border-t
            border-[var(--border)]
            pt-8
          "
        >
          <p
            className="
              text-sm
              text-muted
            "
          >
            © {new Date().getFullYear()} Prathamesh Bhil.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}