import type { AccountStatus, SubscriptionTier } from "@/types/auth";

export const ACCOUNT_STATUS: Record<AccountStatus, { label: string; className: string }> = {
  ACTIVE: { label: "Active", className: "bg-success-muted text-success" },
  DEACTIVATED: { label: "Suspended", className: "bg-danger-muted text-danger" },
};

export const TIER: Record<SubscriptionTier, { label: string; className: string }> = {
  FREE: { label: "Free", className: "bg-surface-muted text-foreground-muted" },
  PRO: { label: "Pro", className: "bg-brand-muted text-brand" },
};

export const AUTH_PROVIDER_LABEL = {
  PASSWORD: "Email and password",
  GOOGLE: "Google",
  APPLE: "Apple",
} as const;
