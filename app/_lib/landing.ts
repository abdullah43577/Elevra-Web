import { BadgeCheck, FileSearch, FileText, Link2, Mail, MessageSquareText, Mic, ShieldCheck, Send, UserRoundPen, type LucideIcon } from "lucide-react";

export interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  isPro?: boolean;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    icon: Link2,
    title: "Save the posting",
    description: "Paste a job link or share it from your browser. Elevra fills in the company, role and description for you.",
  },
  {
    icon: FileSearch,
    title: "Tailor your resume",
    description: "Reshape your resume around the posting's keywords, then see exactly what changed and how your match moved.",
    isPro: true,
  },
  {
    icon: FileText,
    title: "Write the cover letter",
    description: "Get a first draft built from your real experience and the job description, styled to match your resume.",
    isPro: true,
  },
  {
    icon: MessageSquareText,
    title: "Prepare for the interview",
    description: "Generate the questions this role is likely to ask and pin them to the application.",
    isPro: true,
  },
  {
    icon: Mic,
    title: "Rehearse out loud",
    description: "Answer on a timer, record yourself, and get feedback on pace, filler words and structure.",
    isPro: true,
  },
  {
    icon: Send,
    title: "Follow up",
    description: "Draft the follow-up, the thank-you, or your reply to an offer, then send it from your own email.",
    isPro: true,
  },
];

export const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Nothing about you is made up",
    description: "Employers, titles, dates and numbers only ever come from what you entered. The AI can reorder and rephrase. It cannot invent.",
  },
  {
    icon: UserRoundPen,
    title: "Every draft is yours to edit",
    description: "Resumes, letters and emails land in an editor for you to review. Nothing is saved or changed behind your back.",
  },
  {
    icon: Mail,
    title: "Nothing is sent for you",
    description: "Elevra never emails a recruiter. You share or send every message yourself.",
  },
  {
    icon: BadgeCheck,
    title: "Built for applicant tracking systems",
    description: "Six single-column templates, exported as real text PDFs that hiring software can read.",
  },
];

export const FREE_FEATURES = [
  "Unlimited applications, resumes, cover letters and notes",
  "Six ATS-friendly templates with PDF export",
  "Import your resume from a PDF and jobs from a link",
  "Interview question bank and practice runner",
  "Reminders when an application goes quiet",
];

export const PRO_FEATURES = [
  "Resume tailoring to each posting",
  "Cover letter, follow-up and thank-you drafts",
  "Interview questions written from the job description",
  "Feedback on your recorded answers",
  "Voice-note transcripts and note summaries",
];

export const FAQS = [
  {
    question: "Is Elevra free?",
    answer: "Yes. Tracking applications, building resumes and cover letters, exporting PDFs and practising interviews are all free. Pro adds the AI features, and you can try it free through the store.",
  },
  {
    question: "Will the AI make things up on my resume?",
    answer: "No. Every fact comes from your own career history. Elevra checks each change against what you wrote and drops anything it cannot support.",
  },
  {
    question: "Does Elevra apply to jobs or email recruiters for me?",
    answer: "Never. Elevra prepares everything with you, and you decide what to send and where.",
  },
  {
    question: "When can I download it?",
    answer: "Elevra is coming soon to Google Play and the App Store.",
  },
  {
    question: "Can I delete my account?",
    answer: "Yes, from the Profile tab in the app. It removes your account and everything in it permanently.",
  },
];
