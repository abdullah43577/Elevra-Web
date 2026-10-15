import { buildPageMetadata } from "@/app/_lib/metadata";
import { AppLogo } from "@/components/shared/app-logo";
import Link from "next/link";
import { Suspense } from "react";

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 py-12">
      <Link href="/" className="mb-8">
        <AppLogo />
      </Link>
      <main className="w-full max-w-md">
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </div>
  );
}
