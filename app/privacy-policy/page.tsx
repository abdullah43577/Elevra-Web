import { buildPageMetadata } from "@/app/_lib/metadata";
import { LegalPage } from "@/components/shared/legal-page";
import { PRIVACY_SECTIONS } from "./_components/sections";

export const metadata = buildPageMetadata({
  path: "/privacy-policy",
  title: "Privacy policy",
  description: "What Elevra collects, why, who processes it, and how to delete it.",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="15 October 2026"
      intro="Elevra helps you prepare job applications. To do that it stores the career history and documents you give it. This page explains what we collect, why, and the control you have over it."
      sections={PRIVACY_SECTIONS}
    />
  );
}
