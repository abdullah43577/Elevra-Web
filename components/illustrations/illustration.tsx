import { cn } from "@/lib/utils";
import { PEEPS, type PeepName } from "./peeps";

interface Props {
  name: PeepName;
  className?: string;
}

export const Illustration = function ({ name, className }: Props) {
  return (
    <div className={cn("relative aspect-square", className)} aria-hidden>
      <div className="absolute top-[22%] left-[14%] aspect-square w-[72%] rounded-full bg-brand-muted" />
      {/* Generated and sanitised from Open Peeps by ../elevra/scripts/build-illustrations.js. */}
      <div className="relative h-full [&>svg]:h-full [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: PEEPS[name] }} />
    </div>
  );
};
