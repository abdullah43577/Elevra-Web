import { InfoRow } from "@/components/shared/info-row";
import { TierBadge } from "@/components/shared/user-badges";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/format";
import type { AdminUserDetail } from "@/types/admin";

interface Props {
  user: AdminUserDetail;
  onGrant: () => void;
  onRevoke: () => void;
}

export const PlanCard = function ({ user, onGrant, onRevoke }: Props) {
  const grantedAt = user.settings?.proGrantedAt;
  const subscription = user.subscription;

  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-foreground">Plan</p>
        {grantedAt ? (
          <Button variant="outline" size="sm" onClick={onRevoke}>
            Revoke Pro
          </Button>
        ) : (
          <Button size="sm" onClick={onGrant}>
            Grant Pro
          </Button>
        )}
      </div>
      <div className="mt-2 divide-y divide-line">
        <InfoRow label="Plan" value={<TierBadge user={user} />} />
        <InfoRow label="Complimentary Pro" value={grantedAt ? `Since ${formatDate(grantedAt)}` : "No"} />
        <InfoRow label="Store subscription" value={subscription?.isActive ? "Active" : "None"} />
        {subscription?.expiresAt && <InfoRow label="Store renewal" value={formatDate(subscription.expiresAt)} />}
      </div>
    </div>
  );
};
