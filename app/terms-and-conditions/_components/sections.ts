import type { LegalSection } from "@/components/shared/legal-page";
import { SITE } from "@/app/_lib/site";

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Using Elevra",
    paragraphs: ["You need an account to use Elevra. Keep your sign-in details private, and give accurate information about yourself. You are responsible for what happens under your account."],
  },
  {
    heading: "Your content",
    paragraphs: [
      "What you create in Elevra stays yours. You give us permission to store and process it only so we can provide the service to you, including sending it to our AI providers when you use an AI feature.",
    ],
  },
  {
    heading: "AI drafts",
    paragraphs: [
      "AI features produce drafts based on what you entered. Review every draft before you use it. You are responsible for what you send to an employer, and Elevra does not guarantee any interview, offer, or outcome.",
    ],
  },
  {
    heading: "Elevra Pro",
    bullets: [
      "Pro is a subscription billed through Google Play or the App Store, monthly or yearly.",
      "If a free trial is offered, it converts to a paid subscription at the end of the trial unless you cancel before then.",
      "Subscriptions renew automatically. Manage or cancel them in your store account. Refunds follow the store's policy.",
    ],
  },
  {
    heading: "Acceptable use",
    bullets: [
      "Do not use Elevra to break the law, or to misrepresent who you are to an employer.",
      "Do not try to break, overload, or get around the limits of the service.",
      "We may suspend or close an account that breaks these terms.",
    ],
  },
  {
    heading: "Availability",
    paragraphs: ["We work to keep Elevra running, but we cannot promise it will always be available or free of errors. AI features in particular may sometimes be unavailable."],
  },
  {
    heading: "Ending your account",
    paragraphs: ["You can delete your account at any time from the Profile tab. Deleting it does not cancel a store subscription, so cancel that in your store account too."],
  },
  {
    heading: "Contact",
    paragraphs: [`Questions about these terms: ${SITE.supportEmail}.`],
  },
];
