export type UserRole = "USER" | "ADMIN";
export type AccountStatus = "ACTIVE" | "DEACTIVATED";
export type SubscriptionTier = "FREE" | "PRO";
export type AuthProvider = "PASSWORD" | "GOOGLE" | "APPLE";

export interface User {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  profile_pic: string | null;
  role: UserRole;
  account_status: AccountStatus;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
