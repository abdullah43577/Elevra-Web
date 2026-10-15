import { buildPageMetadata } from "@/app/_lib/metadata";
import { AppLogo } from "@/components/shared/app-logo";
import Link from "next/link";
import { Suspense } from "react";
import { AuthPanel } from "./_components/auth-panel";

export const metadata = {
  ...buildPageMetadata({
    path: "/auth/signin",
    title: "Admin sign in",
    description: "Sign in to the Elevra admin dashboard.",
  }),
  robots: { index: false, follow: false },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen bg-surface lg:grid-cols-2">
      <AuthPanel />
      <div className="flex flex-col px-4 py-10 sm:px-10">
        <Link href="/" aria-label="Elevra home" className="self-start lg:hidden">
          <AppLogo />
        </Link>
        <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-10">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
