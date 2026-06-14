import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
/* Step 1 — Add React Imports */
import { useState } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:opacity-90",
        secondary:
          "border border-white/10 bg-white/5 hover:bg-white/10",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  /* Step 2 — Create Ripple State */
  const [ripples, setRipples] = useState<
    Array<{
      x: number;
      y: number;
      id: number;
    }>
  >([]);

  /* Step 3 — Create Ripple Handler */
  const createRipple = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now();

    setRipples((prev) => [
      ...prev,
      { x, y, id },
    ]);

    setTimeout(() => {
      setRipples((prev) =>
        prev.filter(
          (ripple) => ripple.id !== id
        )
      );
    }, 600);
  };

  return (
    /* Step 4 — Update Button Element */
    <button
      onClick={(e) => {
        createRipple(e);
        props.onClick?.(e);
      }}
      /* Step 5 — Add Premium Classes */
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        `
        relative
        overflow-hidden

        transition-all
        duration-300

        hover:scale-[1.02]
        active:scale-[0.98]
        `,
        className
      )}
      {...props}
    >
      {props.children}

      {/* Step 6 — Render Ripple */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="
            pointer-events-none
            absolute
            h-32
            w-32
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/20
            animate-ripple
          "
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </button>
  );
}