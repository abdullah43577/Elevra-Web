import { cn } from "@/lib/utils";
import { Smartphone } from "lucide-react";

export const PlayBadge = function ({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex h-12 items-center gap-3 rounded-xl border border-line-strong bg-white px-4", className)} aria-label="Coming soon to Google Play">
      <Smartphone className="size-5 text-foreground" />
      <div className="text-left leading-tight">
        <p className="text-[11px] text-foreground-muted">Coming soon to</p>
        <p className="text-sm font-semibold text-foreground">Google Play</p>
      </div>
    </div>
  );
};
