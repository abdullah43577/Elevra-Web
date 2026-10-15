import { Info } from "lucide-react";

export const ProForEveryoneNotice = function () {
  return (
    <div className="mb-6 flex gap-3 rounded-2xl border border-line bg-surface p-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-muted">
        <Info className="size-4.5 text-amber" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">Pro is unlocked for everyone</p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          PRO_FOR_EVERYONE is on, so every account gets the AI features regardless of the plan shown here. Unset it on the server before real payments go live.
        </p>
      </div>
    </div>
  );
};
