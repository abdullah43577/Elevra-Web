import { JOURNEY_STEPS } from "../_lib/landing";
import { SectionHeading } from "./section-heading";

export const JourneySection = function () {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="How it works" title="One application, six steps" description="Every job you save gets its own checklist. Elevra shows you the next step and helps you do it." />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNEY_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-muted">
                  <step.icon className="size-5 text-brand" />
                </div>
                <span className="text-xs font-semibold text-foreground-subtle">Step {index + 1}</span>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                {step.isPro && <span className="rounded-full bg-brand-muted px-2 py-0.5 text-[11px] font-semibold text-brand">Pro</span>}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
