import { AppLogo } from "@/components/shared/app-logo";
import Link from "next/link";
import { SITE } from "../_lib/site";

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms-and-conditions" },
      { label: "Delete your account", href: "/delete-account" },
    ],
  },
] as const;

export const Footer = function () {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <AppLogo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">{SITE.tagline}</p>
          <a href={`mailto:${SITE.supportEmail}`} className="mt-4 inline-block text-sm font-medium text-foreground hover:text-brand">
            {SITE.supportEmail}
          </a>
        </div>

        {FOOTER_LINKS.map(group => (
          <div key={group.heading}>
            <h3 className="text-sm font-semibold text-foreground">{group.heading}</h3>
            <ul className="mt-4 space-y-2.5">
              {group.links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 sm:px-6">
          <p className="text-xs text-foreground-muted">© {new Date().getFullYear()} Elevra. All rights reserved.</p>
          <Link href="/auth/signin" className="text-xs text-foreground-subtle hover:text-foreground-muted">
            Team sign in
          </Link>
        </div>
      </div>
    </footer>
  );
};
