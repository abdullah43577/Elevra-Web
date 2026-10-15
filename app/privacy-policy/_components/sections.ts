import type { LegalSection } from "@/components/shared/legal-page";
import { SITE } from "@/app/_lib/site";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "What we collect",
    bullets: [
      "Account details: your name, email address, and a hashed password, or the identity Google or Apple shares when you sign in with them.",
      "What you create in Elevra: job applications, career history, resumes, cover letters, notes, interview answers, and voice recordings.",
      "Device details needed to send notifications: a push token and the device platform.",
      "Subscription status from Google Play or the App Store, through our billing provider. We never see your card details.",
    ],
  },
  {
    heading: "How we use it",
    bullets: [
      "To run the app: store your work, sync it across sessions, and show it back to you.",
      "To power the features you ask for, such as tailoring a resume, drafting a letter, or giving feedback on a recorded answer.",
      "To send the notifications and emails you would expect, such as sign-in codes and application reminders.",
      "To keep the service secure and to prevent abuse.",
    ],
    paragraphs: ["We do not sell your data, and we do not use it for advertising."],
  },
  {
    heading: "AI features",
    paragraphs: [
      "When you use an AI feature, the text it needs (for example your career history and a job description, or a recording to transcribe) is sent to our AI providers, Groq and OpenRouter, to produce the result. They process it to answer that request.",
      "Results are drafts. Nothing is saved to your account until you choose to save it, and nothing is ever sent to an employer on your behalf.",
    ],
  },
  {
    heading: "Who processes your data",
    paragraphs: ["We use trusted providers to run Elevra. Each one only receives what it needs for its job:"],
    bullets: [
      "Supabase and Render host our database and servers.",
      "Cloudinary stores voice recordings and profile pictures.",
      "Groq and OpenRouter process requests for AI features.",
      "Resend delivers our emails, and Zoho Mail receives the messages you send to our support address.",
      "Expo delivers push notifications.",
      "RevenueCat, Google Play and the App Store handle subscriptions.",
      "Google and Apple, only if you choose to sign in with them.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep your data for as long as your account exists. When you delete your account, your data is removed from our database straight away and your recordings are deleted from storage. Copies in encrypted backups expire on the backup provider's normal schedule.",
    ],
  },
  {
    heading: "Your choices",
    bullets: [
      "You can edit or delete anything you create, at any time, in the app.",
      "You can turn notifications off in the app or in your phone's settings.",
      "You can delete your account from the Profile tab. See the Delete your account page for the steps.",
      `You can ask us for a copy of your data, or ask any question about it, at ${SITE.supportEmail}.`,
    ],
  },
  {
    heading: "Children",
    paragraphs: ["Elevra is meant for people looking for work and is not directed at children under 16."],
  },
  {
    heading: "Changes",
    paragraphs: ["If we change this policy in a way that matters, we will tell you in the app before it takes effect."],
  },
];
