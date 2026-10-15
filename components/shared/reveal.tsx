"use client";

import { motion, useReducedMotion } from "motion/react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onLoad?: boolean;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export const Reveal = function ({ children, delay = 0, className, onLoad }: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  const target = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      {...(onLoad ? { animate: target } : { whileInView: target, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};
