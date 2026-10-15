import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const STEPS = [
  { label: "Posting saved", isDone: true },
  { label: "Resume tailored to the job", isDone: true },
  { label: "Cover letter written", isDone: true },
  { label: "Interview questions pinned", isDone: false },
  { label: "Rehearse your answers", isDone: false },
];

export const HeroPreview = function () {
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-line bg-white p-5" aria-hidden>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold text-foreground">Product Designer</p>
          <p className="text-sm text-foreground-muted">Northwind · Remote</p>
        </div>
        <span className="rounded-full bg-brand-muted px-2.5 py-1 text-xs font-semibold text-brand">Applied</span>
      </div>

      <p className="mt-6 text-xs font-semibold text-foreground-muted">Next steps</p>
      <ul className="mt-2 divide-y divide-line rounded-2xl border border-line">
        {STEPS.map(step => (
          <li key={step.label} className="flex items-center gap-3 px-4 py-3">
            <span className={cn("flex size-5 shrink-0 items-center justify-center rounded-full border", step.isDone ? "border-brand bg-brand" : "border-line-strong")}>
              {step.isDone && <Check className="size-3 text-white" strokeWidth={3} />}
            </span>
            <span className={cn("text-sm", step.isDone ? "text-foreground-muted line-through" : "font-medium text-foreground")}>{step.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
