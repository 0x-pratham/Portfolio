"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NAV_ITEMS } from "@/lib/constants";
import { Magnetic } from "@/components/shared/magnetic";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const pathname = usePathname();

  // Animation variants
  const navContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const navItem = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Change #6: Document Enhancement (Updated scroll threshold to 60)
      setScrolled(scrollTop > 60);

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(13,13,13,0.72)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[var(--accent)] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navContainer}
        className={`container-custom flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20" : "h-24"
        }`}
        aria-label="Main Navigation"
      >
        {/* Logo Branding */}
        <motion.div variants={navItem}>
          {/* Change #5: Premium Upgrade (Animated Wrapper) */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link href="/" className="flex flex-col leading-none">
              <span
                className={`flex flex-col leading-none transition-all duration-500 ${
                  scrolled ? "opacity-100" : "opacity-90"
                }`}
              >
                PB
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted">
                Founder
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <motion.div key={item.label} variants={navItem}>
              <Link
                href={item.href}
                className={`group relative text-sm tracking-wide transition-all duration-500 ${
                  pathname === item.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--warm-grey)] hover:text-[var(--warm-ivory)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full bg-[var(--accent)] transition-transform duration-500 ${
                    pathname === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Magnetic>
            <motion.div variants={navItem}>
              <Link
                href="https://cosmolix.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm tracking-wide text-[var(--warm-ivory)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
              >
                Explore Cosmolix
              </Link>
            </motion.div>
          </Magnetic>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          aria-label="Toggle Navigation"
          onClick={() => setOpen(!open)}
          className="text-[var(--warm-ivory)] transition-colors hover:text-[var(--accent)] md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Mobile Dropdown Overlay Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navContainer}
              className="absolute left-0 top-full flex h-screen w-full flex-col bg-[var(--bg)] p-8 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.label} variants={navItem}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-[var(--border)] py-4 text-[var(--warm-grey)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}