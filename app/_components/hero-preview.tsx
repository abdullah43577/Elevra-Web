"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const STEPS = [
  { label: "Posting saved", isDone: true },
  { label: "Resume tailored to the job", isDone: true },
  { label: "Cover letter written", isDone: true },
  { label: "Interview questions pinned", isDone: false },
  { label: "Rehearse your answers", isDone: false },
];

const ROW_DELAY = 0.12;
const FIRST_ROW_AT = 0.5;

export const HeroPreview = function () {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-line bg-surface p-5" aria-hidden>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold text-foreground">Product Designer</p>
          <p className="text-sm text-foreground-muted">Northwind · Remote</p>
        </div>
        <span className="rounded-full bg-brand-muted px-2.5 py-1 text-xs font-semibold text-brand">Applied</span>
      </div>

      <p className="mt-6 text-xs font-semibold text-foreground-muted">Next steps</p>
      <ul className="mt-2 divide-y divide-line rounded-2xl border border-line">
        {STEPS.map((step, index) => {
          const rowDelay = FIRST_ROW_AT + index * ROW_DELAY;

          return (
            <motion.li
              key={step.label}
              className="flex items-center gap-3 px-4 py-3"
              initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: rowDelay }}
            >
              <span className={cn("flex size-5 shrink-0 items-center justify-center rounded-full border", step.isDone ? "border-brand bg-brand" : "border-line-strong")}>
                {step.isDone && (
                  <motion.span
                    initial={shouldReduceMotion ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22, delay: rowDelay + 0.6 }}
                  >
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </motion.span>
                )}
              </span>
              <span className={cn("text-sm", step.isDone ? "text-foreground-muted line-through" : "font-medium text-foreground")}>{step.label}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
