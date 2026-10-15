import { StatusBadge } from "@/components/shared/status-badge";
import { ACCOUNT_STATUS, TIER } from "@/lib/statuses";
import type { AdminUser } from "@/types/admin";

export const AccountStatusBadge = function ({ user }: { user: AdminUser }) {
  const status = ACCOUNT_STATUS[user.account_status];
  return <StatusBadge label={status.label} className={status.className} />;
};

export const TierBadge = function ({ user }: { user: AdminUser }) {
  const tier = TIER[user.settings?.subscriptionTier ?? "FREE"];
  const label = user.settings?.proGrantedAt ? `${tier.label} · granted` : tier.label;
  return <StatusBadge label={label} className={tier.className} />;
};
