"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext, useRef, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * Premium structural sub-component that locks down the route layout 
 * state tree to prevent text/layout shifting while elements are exiting.
 */
function FrozenRoute({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context);

  useEffect(() => {
    frozen.current = context;
  }, [context]);

  return (
    <LayoutRouterContext.Provider value={frozen.current}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Problem 5 — Scroll Position Restoration
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        // Problem 1 — Animation Is Too Subtle (Enhanced values & blur filters applied)
        initial={{
          opacity: 0,
          y: 24,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: -16,
          filter: "blur(4px)",
        }}
        // Problem 4 — Missing Spring Physics (Premium Vercel/Linear-style cubic bezier easing)
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        // Offloads rendering workloads to the GPU for seamless frame rates
        style={{ willChange: "transform, opacity" }}
        // Problem 3 — Missing Page Depth (Added min-h-screen to prevent layout popping)
        className="w-full origin-top min-h-screen"
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}