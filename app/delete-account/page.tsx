import { buildPageMetadata } from "@/app/_lib/metadata";
import { SITE } from "@/app/_lib/site";
import { LegalPage } from "@/components/shared/legal-page";

export const metadata = buildPageMetadata({
  path: "/delete-account",
  title: "Delete your account",
  description: "How to delete your Elevra account and what is removed.",
});

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your Elevra account"
      updated="15 October 2026"
      intro="You can delete your account yourself in the app at any time. It takes effect immediately."
      sections={[
        {
          heading: "In the app",
          bullets: ["Open Elevra and go to the Profile tab.", "Scroll to the bottom and tap Delete account.", "Confirm with your password. If you sign in with Google or Apple, just confirm."],
        },
        {
          heading: "What is deleted",
          paragraphs: [
            "Your account and everything in it: applications, career profile, resumes, cover letters, notes, voice recordings, interview answers, notifications and settings. Recordings are removed from storage as well. This cannot be undone.",
          ],
        },
        {
          heading: "Subscriptions",
          paragraphs: ["Deleting your account does not cancel an Elevra Pro subscription. Cancel it in Google Play or the App Store so you are not charged again."],
        },
        {
          heading: "Can't open the app?",
          paragraphs: [`Email ${SITE.supportEmail} from the address on your account and ask us to delete it. We will confirm once it is done.`],
        },
      ]}
    />
  );
}
