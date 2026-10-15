import { Reveal } from "@/components/shared/reveal";
import { FAQS } from "../_lib/landing";
import { SectionHeading } from "./section-heading";

export const FaqSection = function () {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-line bg-canvas py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <Reveal className="mt-12 divide-y divide-line rounded-2xl border border-line bg-surface">
          {FAQS.map(faq => (
            <details key={faq.question} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                {faq.question}
                <span className="text-xl text-foreground-subtle transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
