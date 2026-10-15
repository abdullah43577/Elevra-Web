import Cookies from "js-cookie";
import { accessTokenExpiration } from "./api";

export type SessionRole = "USER" | "ADMIN";

export const cookieOpts = (expires: Date) => ({
  secure: true,
  sameSite: "lax" as const,
  expires,
});

// Mirrors the server: access token 30 minutes, refresh token 7 days.
export const refreshTokenExpiration = () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

export const setAuthCookies = (data: { tokens: { access: string; refresh: string }; role: SessionRole }) => {
  const refreshExpires = refreshTokenExpiration();

  Cookies.set("session_id", data.tokens.access, cookieOpts(accessTokenExpiration));
  Cookies.set("session_id_ref", data.tokens.refresh, cookieOpts(refreshExpires));
  Cookies.set("session_type", data.role, cookieOpts(refreshExpires));
};

export const clearAuthCookies = () => {
  Cookies.remove("session_id");
  Cookies.remove("session_id_ref");
  Cookies.remove("session_type");
};
