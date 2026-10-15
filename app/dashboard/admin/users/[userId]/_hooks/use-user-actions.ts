import { useSubmitData } from "@/hooks/use-submit-data";
import { API_ENDPOINTS } from "@/lib/endpoints";
import { queryClient } from "@/lib/utils";
import type { AccountStatus, SubscriptionTier } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const USERS_LIST_PREFIX = "/admin/users?";

// List and stats keys carry query strings, so they are refreshed by prefix rather than by exact key.
const refreshUserLists = function () {
  queryClient.refetchQueries({ predicate: query => String(query.queryKey[0]).startsWith(USERS_LIST_PREFIX) || query.queryKey[0] === API_ENDPOINTS.admin.users.list() });
  queryClient.refetchQueries({ queryKey: [API_ENDPOINTS.admin.stats] });
};

export const useUserActions = function (userId: string) {
  const router = useRouter();
  const [isDeleted, setIsDeleted] = useState(false);

  const { mutate: updateStatus, isPending: isUpdatingStatus } = useSubmitData<{ status: AccountStatus }, unknown>({
    url: API_ENDPOINTS.admin.users.updateStatus(userId),
    method: "patch",
    onSuccessMessage: "Account updated",
    additionalQueryKeys: [[API_ENDPOINTS.admin.users.detail(userId)]],
    onSuccess: refreshUserLists,
  });

  const { mutate: updateTier, isPending: isUpdatingTier } = useSubmitData<{ tier: SubscriptionTier }, unknown>({
    url: API_ENDPOINTS.admin.users.updateTier(userId),
    method: "patch",
    onSuccessMessage: "Plan updated",
    additionalQueryKeys: [[API_ENDPOINTS.admin.users.detail(userId)]],
    onSuccess: refreshUserLists,
  });

  const { mutate: removeUser, isPending: isDeleting } = useSubmitData<void, unknown>({
    url: API_ENDPOINTS.admin.users.remove(userId),
    method: "delete",
    getBody: () => undefined,
    onSuccessMessage: "Account deleted",
    onSuccess: () => {
      refreshUserLists();
      router.replace("/dashboard/admin/users");
    },
    onError: () => setIsDeleted(false),
  });

  // The delete url is also the detail query's key; disabling the query first stops the post-delete refetch 404ing.
  const deleteUser = function () {
    setIsDeleted(true);
    removeUser();
  };

  return { updateStatus, isUpdatingStatus, updateTier, isUpdatingTier, deleteUser, isDeleting, isDeleted };
};
