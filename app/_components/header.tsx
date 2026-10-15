"use client";

import { AppLogo } from "@/components/shared/app-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Principles", href: "/#principles" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const Header = function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Elevra home">
          <AppLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden h-10 px-5 md:inline-flex">
          <Link href="/#download">Get the app</Link>
        </Button>

        <button type="button" onClick={() => setIsMenuOpen(open => !open)} className="rounded-md p-2 text-foreground-muted md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={cn("border-t border-line bg-surface px-4 pt-2 pb-6 md:hidden", !isMenuOpen && "hidden")}>
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground-muted hover:bg-surface-muted hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="mt-4 h-11 w-full">
          <Link href="/#download" onClick={() => setIsMenuOpen(false)}>
            Get the app
          </Link>
        </Button>
      </div>
    </header>
  );
};
