import { Reveal } from "@/components/shared/reveal";
import { PRINCIPLES } from "../_lib/landing";
import { SectionHeading } from "./section-heading";

export const PrinciplesSection = function () {
  return (
    <section id="principles" className="scroll-mt-16 border-y border-line bg-canvas py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Principles" title="AI that works for you, not instead of you" description="Your name goes on every application. So Elevra holds itself to a few rules." />

        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {PRINCIPLES.map(principle => (
            <div key={principle.title} className="bg-surface p-8">
              <principle.icon className="size-6 text-brand" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{principle.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
