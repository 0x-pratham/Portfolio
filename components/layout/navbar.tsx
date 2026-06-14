"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { NAV_ITEMS } from "@/lib/constants";
import { Magnetic } from "@/components/shared/magnetic";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const pathname = usePathname();

  // Animation variants
  const navContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const navItem: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
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
          ? "border-b border-[var(--border)] bg-[rgba(10,10,10,0.88)] backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar - Refined to 1px and hidden on Homepage */}
      {pathname !== "/" && (
        <div
          className="absolute top-0 left-0 h-[1px] bg-[var(--accent)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      <motion.nav
        initial="hidden"
        animate={{
          height: scrolled ? 88 : 96,
        }}
        variants={navContainer}
        className="container-custom flex items-center justify-between transition-all duration-500 overflow-hidden"
        aria-label="Main Navigation"
      >
        {/* Logo Branding */}
        <motion.div variants={navItem} animate="visible">
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
              ease: [0.16, 1, 0.3, 1] as any,
            }}
          >
            {/* Restrained and Premium Logo Hover Interaction */}
            <motion.div
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.3,
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
                <span className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted whitespace-nowrap">
                  Engineer & Founder
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div key={item.label} variants={navItem} animate="visible">
                <Link
                  href={item.href}
                  className={`group relative text-sm tracking-wide transition-all duration-300 transition-colors ${
                    isActive
                      ? "text-[var(--accent)] font-medium opacity-100"
                      : "text-[var(--warm-grey)] opacity-70 hover:opacity-100 hover:text-[var(--warm-ivory)]"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 h-px w-full bg-[var(--accent)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--accent)] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop CTA Button - Shimmer Animation Removed */}
        <div className="hidden md:block">
          <Magnetic>
            <motion.div variants={navItem} animate="visible">
              <Link
                href="https://cosmolix.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-full border border-[var(--border)] px-6 py-3 text-sm tracking-wide text-[var(--warm-ivory)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
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
          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {open ? <X /> : <Menu />}
          </motion.div>
        </button>

        {/* Mobile Dropdown Menu Upgrade */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-full flex w-full flex-col bg-[var(--bg)] p-8 md:hidden border-t border-[var(--border)] overflow-hidden"
            >
              {/* Premium Hierarchy Navigation Section Label */}
              <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-muted font-mono opacity-60">
                Navigation
              </div>

              <motion.div 
                variants={navContainer} 
                initial="hidden" 
                animate="visible" 
                className="flex flex-col flex-grow"
              >
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={navItem}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block border-b border-[var(--border)]/60 py-4 tracking-wide transition-colors duration-300 ${
                        pathname === item.href
                          ? "text-[var(--accent)] font-medium"
                          : "text-[var(--warm-grey)] hover:text-[var(--accent)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Intentional Bottom Mobile Menu Actions Container */}
                <motion.div 
                  variants={navItem} 
                  className="mt-auto pt-8 pb-16"
                >
                  <Link
                    href="https://cosmolix.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-sm tracking-wide text-[var(--warm-ivory)] transition-all duration-300 hover:border-[var(--accent)]"
                  >
                    Explore Cosmolix
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}