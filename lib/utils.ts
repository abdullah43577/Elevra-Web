import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const queryClient = new QueryClient();

export const ADMIN_HOME = "/dashboard/admin";

// Only allow safe, relative, in-app paths — prevents open-redirect via callbackUrl
export const isSafeCallback = function (url: string | null): url is string {
  return !!url && url.startsWith("/") && !url.startsWith("//");
};

export const buildQuery = function (params: Record<string, string | number | undefined>) {
  const entries = Object.entries(params).filter(([, value]) => value !== undefined && value !== "");
  if (entries.length === 0) return "";
  return `?${entries.map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`).join("&")}`;
};
