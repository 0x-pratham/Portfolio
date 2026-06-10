import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div
        className="
          container-custom
          grid
          gap-12
          md:grid-cols-3
        "
      >
        <div>
          <h3 className="mb-4 text-xl font-bold">
            Prathamesh Bhil
          </h3>

          <p className="text-slate-400">
            Founder & CEO at Cosmolix Pvt Ltd.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">
            Navigation
          </h4>

          <div className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">
            Connect
          </h4>

          <div className="flex flex-col gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div
        className="
          container-custom
          mt-12
          border-t
          border-white/10
          pt-8
          text-sm
          text-slate-500
        "
      >
        © {new Date().getFullYear()} Prathamesh Bhil.
      </div>
    </footer>
  );
}