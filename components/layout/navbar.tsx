"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav
        className="container-custom flex h-20 items-center justify-between"
        aria-label="Main Navigation"
      >
        <div className="flex flex-col">
  <span className="font-bold">
    PB
  </span>

  <span className="text-xs text-slate-400">
    Founder
  </span>
</div>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="https://cosmolix.co.in"
            target="_blank"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Explore Cosmolix
          </Link>
        </div>

        <button
          aria-label="Toggle Navigation"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="absolute left-0 top-20 flex h-screen w-full flex-col bg-[#050816] p-8 md:hidden">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-white/10 py-4"
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