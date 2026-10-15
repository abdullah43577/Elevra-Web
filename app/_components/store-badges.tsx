import { cn } from "@/lib/utils";
import { Apple, Play, type LucideIcon } from "lucide-react";

const STORES: { name: string; icon: LucideIcon }[] = [
  { name: "Google Play", icon: Play },
  { name: "App Store", icon: Apple },
];

export const StoreBadges = function ({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {STORES.map(store => (
        <div key={store.name} className="inline-flex h-12 items-center gap-3 rounded-xl border border-line-strong bg-surface px-4" aria-label={`Coming soon to the ${store.name}`}>
          <store.icon className="size-5 text-foreground" />
          <div className="text-left leading-tight">
            <p className="text-[11px] text-foreground-muted">Coming soon to</p>
            <p className="text-sm font-semibold text-foreground">{store.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
