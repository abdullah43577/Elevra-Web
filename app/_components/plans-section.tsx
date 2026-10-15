import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { FREE_FEATURES, PRO_FEATURES } from "../_lib/landing";
import { SectionHeading } from "./section-heading";

interface PlanProps {
  name: string;
  summary: string;
  features: string[];
  isHighlighted?: boolean;
  delay?: number;
}

const Plan = function ({ name, summary, features, isHighlighted, delay }: PlanProps) {
  return (
    <Reveal delay={delay} className={cn("rounded-3xl border bg-surface p-8", isHighlighted ? "border-brand" : "border-line")}>
      <h3 className="text-xl font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-foreground-muted">{summary}</p>
      <ul className="mt-6 space-y-3">
        {features.map(feature => (
          <li key={feature} className="flex gap-3 text-sm text-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-brand" />
            {feature}
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export const PlansSection = function () {
  return (
    <section id="pricing" className="scroll-mt-16 bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Pricing" title="Free to use. Pro when you want the AI." description="Monthly or yearly, cancel any time from your store account. Prices are shown in the app in your currency." />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Plan name="Free" summary="Everything you need to run your search." features={FREE_FEATURES} />
          <Plan name="Pro" summary="The AI features, with a free trial to start." features={PRO_FEATURES} isHighlighted delay={0.08} />
        </div>
      </div>
    </section>
  );
};
