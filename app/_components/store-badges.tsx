import { cn } from "@/lib/utils";
import Image from "next/image";

// Official artwork, unmodified. Link each badge to its store listing once the app is live there.
export const StoreBadges = function ({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p className="text-xs font-semibold text-foreground-muted">Coming soon</p>
      <div className="flex flex-wrap items-center gap-3">
        <Image src="/images/badges/google-play.png" alt="Get it on Google Play" width={155} height={60} className="-mx-2.5 h-15 w-auto" />
        <Image src="/images/badges/app-store.svg" alt="Download on the App Store" width={120} height={40} className="h-10 w-auto" />
      </div>
    </div>
  );
};
