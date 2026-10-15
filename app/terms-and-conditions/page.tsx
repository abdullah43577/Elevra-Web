import { buildPageMetadata } from "@/app/_lib/metadata";
import { LegalPage } from "@/components/shared/legal-page";
import { TERMS_SECTIONS } from "./_components/sections";

export const metadata = buildPageMetadata({
  path: "/terms-and-conditions",
  title: "Terms of service",
  description: "The terms for using Elevra and Elevra Pro.",
});

export default function TermsPage() {
  return <LegalPage title="Terms of service" updated="15 October 2026" intro="These terms cover your use of the Elevra app and Elevra Pro. By using Elevra you agree to them." sections={TERMS_SECTIONS} />;
}
