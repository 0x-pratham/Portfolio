"use client";

import {
  useRef,
  ReactNode,
} from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
}

export function Magnetic({
  children,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const el = ref.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    el.style.transform = `
      translate(
        ${x * 0.08}px,
        ${y * 0.08}px
      )
    `;
  };

  const handleMouseLeave = () => {
    const el = ref.current;

    if (!el) return;

    el.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        inline-block
        transition-transform
        duration-500
        ease-out
        ${className}
      `}
    >
      {children}
    </div>
  );
}