"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({
  children,
}: LenisProviderProps) {
  useEffect(() => {
    // Issue #1 & #2: Calibrated duration and uniform cubic easing curves 
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      touchMultiplier: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom quintic out implementation matching the site motion curve
    });

    // Issue #3: Clean scoped local reference for requestAnimationFrame tracking
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Strict teardown lifecycle cleanup preventing continuous event looping loop leaks
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}