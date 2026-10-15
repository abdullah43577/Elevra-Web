import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export const AppLogo = function ({ className }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src="/images/logo-mark.png" alt="" width={32} height={32} className="size-8 rounded-lg" priority />
      <span className="text-xl font-bold tracking-tight text-foreground">Elevra</span>
    </span>
  );
};
