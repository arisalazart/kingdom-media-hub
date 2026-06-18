"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered reveal. Default: fade + slide Y.
 * variant="blur": adds simultaneous blur for hero elements.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  variant = "slide",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span" | "p";
  variant?: "slide" | "blur" | "scale";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const initial =
    reduce ? { opacity: 0 }
    : variant === "blur" ? { opacity: 0, y: 16, filter: "blur(4px)" }
    : variant === "scale" ? { opacity: 0, scale: 0.97 }
    : { opacity: 0, y: 20 };

  const animate =
    variant === "blur" ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : variant === "scale" ? { opacity: 1, scale: 1 }
    : { opacity: 1, y: 0 };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
