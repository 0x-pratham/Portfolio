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

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          y: 12, // Reduced offset for a more elegant, subtle upward micro-glide
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8, // Balanced exit pull to maintain spatial perspective 
        }}
        transition={{
          duration: 0.5,
          // Premium Cinematic Cubic Bezier Easing Function (In-Out Quintic Variant)
          ease: [0.76, 0, 0.24, 1],
        }}
        // Offloads rendering workloads to the GPU for seamless frame rates
        style={{ willChange: "transform, opacity" }}
        className="w-full origin-top"
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}