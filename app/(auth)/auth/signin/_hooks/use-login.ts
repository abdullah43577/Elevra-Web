import { useSubmitData } from "@/hooks/use-submit-data";
import { setAuthCookies } from "@/lib/authService";
import { API_ENDPOINTS } from "@/lib/endpoints";
import { showToast } from "@/lib/show-toast";
import { ADMIN_HOME, isSafeCallback } from "@/lib/utils";
import type { LoginFormValues } from "@/schemas/auth";
import type { AuthTokens, User } from "@/types/auth";
import type { APIResponse } from "@/types/response";

type LoginData = { user: User; token: { tokens: AuthTokens } };

interface Options {
  callbackUrl: string | null;
  onSuccess?: () => void;
}

export const useLogin = function ({ callbackUrl, onSuccess }: Options) {
  const { mutate, isPending } = useSubmitData<LoginFormValues, APIResponse<LoginData>>({
    url: API_ENDPOINTS.auth.signin,
    skipAuth: true,
    silent: true,
    onSuccess: response => {
      const { user, token } = response.data;

      if (user.role !== "ADMIN") {
        showToast("error", "This account doesn't have admin access. Elevra is used through the mobile app.");
        return;
      }

      setAuthCookies({
        tokens: { access: token.tokens.accessToken, refresh: token.tokens.refreshToken },
        role: user.role,
      });

      onSuccess?.();
      // full navigation so proxy.ts sees the fresh cookies
      window.location.href = isSafeCallback(callbackUrl) ? callbackUrl : ADMIN_HOME;
    },
  });

  return { login: mutate, isLoggingIn: isPending };
};
