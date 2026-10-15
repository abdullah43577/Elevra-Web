// Confirm both before the site goes live: neither the domain nor the inbox exists yet.
export const SITE = {
  name: "Elevra",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://elevra-web-zeta.vercel.app",
  tagline: "From the job posting to the thank-you email.",
  description: "Elevra takes you through each job application: a resume shaped to the posting, a matching cover letter, the interview questions they are likely to ask, and the follow-up once you have applied.",
  supportEmail: "support@elevra.com",
} as const;
