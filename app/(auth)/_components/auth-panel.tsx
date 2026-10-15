import { AppLogo } from "@/components/shared/app-logo";
import { Reveal } from "@/components/shared/reveal";
import { Illustration } from "@/components/illustrations/illustration";
import Link from "next/link";

export const AuthPanel = function () {
  return (
    <aside className="hidden flex-col justify-between border-r border-line bg-canvas p-10 lg:flex">
      <Link href="/" aria-label="Elevra home" className="self-start">
        <AppLogo />
      </Link>

      <Reveal onLoad className="mx-auto w-full max-w-sm">
        <Illustration name="onboardingTracker" className="mx-auto w-72" />
      </Reveal>

      <Reveal onLoad delay={0.15} className="text-center">
        <h2 className="mx-auto max-w-md text-3xl font-bold tracking-tight text-foreground">Every application, from the posting to the thank-you email.</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-foreground-muted">The team dashboard for keeping Elevra running smoothly.</p>
      </Reveal>
    </aside>
  );
};
