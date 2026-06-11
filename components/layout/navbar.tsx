"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { NAV_ITEMS } from "@/lib/constants";

import { Magnetic } from "@/components/shared/magnetic";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, []);

  return (
    <header
  className={`
    sticky
    top-0
    z-50
    transition-all
    duration-500

    ${
      scrolled
        ? `
          border-b
          border-[var(--border)]
          bg-[rgba(13,13,13,0.85)]
          backdrop-blur-lg
        `
        : `
          bg-transparent
        `
    }
  `}
>
      <nav
        className={`
  container-custom
  flex
  items-center
  justify-between
  transition-all
  duration-500
  ${scrolled ? "h-20" : "h-24"}
`}
        aria-label="Main Navigation"
      >
      <Link
  href="/"
  className="
    flex
    flex-col
    leading-none
  "
>
  <span
    className={`
  flex
  flex-col
  leading-none
  transition-all
  duration-500
  ${scrolled ? "opacity-100" : "opacity-90"}
`}
  >
    
    PB
  </span>

  <span
    className="
      mt-1
      text-[11px]
      uppercase
      tracking-[0.25em]
      text-muted
    "
  >
    Founder
  </span>
</Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
  group
  relative
  text-sm
  tracking-wide
  text-[var(--warm-grey)]
  transition-colors
  duration-500
  hover:text-[var(--warm-ivory)]
"
            >
              <>
  {item.label}

  <span
    className="
      absolute
      -bottom-1
      left-0
      h-px
      w-full
      origin-left
      scale-x-0
      bg-[var(--accent)]
      transition-transform
      duration-500
      group-hover:scale-x-100
    "
  />
</>
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Magnetic>
          <Link
            href="https://cosmolix.co.in"
            target="_blank"
            className="
  rounded-full
  border
  border-[var(--border)]
  px-6
  py-3
  text-sm
  tracking-wide
  text-[var(--warm-ivory)]
  transition-all
  duration-300
  hover:border-[var(--accent)]
  hover:bg-[var(--accent)]
hover:text-black
"
          >
            Explore Cosmolix
          </Link>
          </Magnetic>
        </div>

        <button
          aria-label="Toggle Navigation"
          onClick={() => setOpen(!open)}
          className="
  text-[var(--warm-ivory)]
  transition-colors
  hover:text-[var(--accent)]
  md:hidden
"
        >
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="absolute left-0 top-full flex h-screen w-full flex-col bg-[var(--bg)] p-8 md:hidden">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
  border-b
  border-[var(--border)]
  py-4
  text-[var(--warm-grey)]
  transition-colors
  hover:text-[var(--accent)]
"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}