"use client";

import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { PageHeader } from "@/components/shared/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetData } from "@/hooks/use-get-data";
import { API_ENDPOINTS } from "@/lib/endpoints";
import { fullName } from "@/lib/format";
import type { AdminUserDetail } from "@/types/admin";
import type { APIResponse } from "@/types/response";
import { useParams } from "next/navigation";
import { useState } from "react";
import { DangerZoneCard } from "./_components/danger-zone-card";
import { PlanCard } from "./_components/plan-card";
import { ProfileCard } from "./_components/profile-card";
import { UsageCard } from "./_components/usage-card";
import { useUserActions } from "./_hooks/use-user-actions";

type PendingAction = "suspend" | "reinstate" | "grant" | "revoke" | "delete";

const CONFIRM_COPY: Record<PendingAction, { title: string; description: string; confirmLabel: string; isDestructive?: boolean }> = {
  suspend: {
    title: "Suspend this account?",
    description: "They can't sign in or refresh their session until reinstated. A session already open can last up to 30 minutes.",
    confirmLabel: "Suspend",
    isDestructive: true,
  },
  reinstate: { title: "Reinstate this account?", description: "They will be able to sign in again.", confirmLabel: "Reinstate" },
  grant: {
    title: "Grant complimentary Pro?",
    description: "They get every Pro feature until you revoke it. It survives store subscription changes.",
    confirmLabel: "Grant Pro",
  },
  revoke: {
    title: "Revoke complimentary Pro?",
    description: "They drop back to Free, unless they also pay through the store.",
    confirmLabel: "Revoke",
    isDestructive: true,
  },
  delete: {
    title: "Delete this account permanently?",
    description: "Their applications, resumes, letters, notes, recordings and practice answers are deleted with it. This cannot be undone.",
    confirmLabel: "Delete account",
    isDestructive: true,
  },
};

export default function AdminUserDetailPage() {
  const { userId = "" } = useParams<{ userId: string }>();
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);
  const { updateStatus, isUpdatingStatus, updateTier, isUpdatingTier, deleteUser, isDeleting, isDeleted } = useUserActions(userId);

  const { data, isFetching } = useGetData<APIResponse<AdminUserDetail>>({ url: API_ENDPOINTS.admin.users.detail(userId), shouldFetch: !isDeleted });
  const user = data?.data;

  const closeDialog = () => setPendingAction(null);

  const handleConfirm = function () {
    const options = { onSuccess: closeDialog };

    if (pendingAction === "suspend") updateStatus({ status: "DEACTIVATED" }, options);
    if (pendingAction === "reinstate") updateStatus({ status: "ACTIVE" }, options);
    if (pendingAction === "grant") updateTier({ tier: "PRO" }, options);
    if (pendingAction === "revoke") updateTier({ tier: "FREE" }, options);
    if (pendingAction === "delete") deleteUser();
  };

  if (isFetching && !user) {
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-56 rounded-2xl" />
        ))}
      </div>
    );
  }

  if (!user) return null;

  const isSuspended = user.account_status === "DEACTIVATED";
  const copy = pendingAction ? CONFIRM_COPY[pendingAction] : null;

  return (
    <div>
      <PageHeader backHref="/dashboard/admin/users" title={fullName(user) || "No name"} description={user.email} />

      <div className="grid gap-4 lg:grid-cols-2">
        <ProfileCard user={user} />
        <PlanCard user={user} onGrant={() => setPendingAction("grant")} onRevoke={() => setPendingAction("revoke")} />
        <UsageCard counts={user._count} />
        <DangerZoneCard isSuspended={isSuspended} onToggleSuspend={() => setPendingAction(isSuspended ? "reinstate" : "suspend")} onDelete={() => setPendingAction("delete")} />
      </div>

      <ConfirmDialog
        open={!!copy}
        title={copy?.title ?? ""}
        description={copy?.description ?? ""}
        confirmLabel={copy?.confirmLabel}
        isDestructive={copy?.isDestructive}
        isLoading={isUpdatingStatus || isUpdatingTier || isDeleting}
        onConfirm={handleConfirm}
        onCancel={closeDialog}
      />
    </div>
  );
}
