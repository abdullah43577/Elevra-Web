import { InfoRow } from "@/components/shared/info-row";
import { AccountStatusBadge } from "@/components/shared/user-badges";
import { formatDateTime } from "@/lib/format";
import { AUTH_PROVIDER_LABEL } from "@/lib/statuses";
import type { AdminUserDetail } from "@/types/admin";

export const ProfileCard = function ({ user }: { user: AdminUserDetail }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <p className="text-sm font-semibold text-foreground">Account</p>
      <div className="mt-2 divide-y divide-line">
        <InfoRow label="Status" value={<AccountStatusBadge user={user} />} />
        <InfoRow label="Signs in with" value={AUTH_PROVIDER_LABEL[user.authProvider]} />
        <InfoRow label="Email verified" value={user.has_validated_email ? "Yes" : "No"} />
        <InfoRow label="Profession" value={user.profession?.name ?? "-"} />
        <InfoRow label="Device" value={user.deviceType ?? "-"} />
        <InfoRow label="Last active" value={formatDateTime(user.lastLogin)} />
        <InfoRow label="Joined" value={formatDateTime(user.createdAt)} />
      </div>
    </div>
  );
};
