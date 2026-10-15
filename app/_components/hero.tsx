import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroPreview } from "./hero-preview";
import { StoreBadges } from "./store-badges";

export const Hero = function () {
  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
          <Reveal onLoad>
            <p className="text-sm font-semibold text-brand">Your job application coach</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Every application, from the posting to the thank-you email.</h1>
          </Reveal>
          <Reveal onLoad delay={0.1}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-foreground-muted">
              Elevra keeps each job in one place and tells you what to do next: a resume shaped to the posting, a matching cover letter, the questions they are likely to ask, and the follow-up once you have applied.
            </p>
          </Reveal>
          <Reveal onLoad delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
            <StoreBadges />
            <Button variant="ghost" asChild className="h-12 px-5 text-base">
              <Link href="/#how-it-works">See how it works</Link>
            </Button>
          </Reveal>
        </div>
        <Reveal onLoad delay={0.25}>
          <HeroPreview />
        </Reveal>
      </div>
    </section>
  );
};
