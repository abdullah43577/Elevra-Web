import { Reveal } from "@/components/shared/reveal";
import Image from "next/image";
import { StoreBadges } from "./store-badges";

export const DownloadSection = function () {
  return (
    <section id="download" className="scroll-mt-16 bg-surface py-20">
      <Reveal className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-line bg-brand-muted px-6 py-14 text-center sm:px-12">
          <Image src="/images/logo-mark.png" alt="" width={56} height={56} className="mx-auto size-14 rounded-2xl" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Your next application starts here</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">Elevra is coming soon to Google Play and the App Store.</p>
          <StoreBadges className="mt-8 justify-center" />
        </div>
      </Reveal>
    </section>
  );
};
