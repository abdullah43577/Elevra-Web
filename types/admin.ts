import type { AccountStatus, AuthProvider, SubscriptionTier } from "./auth";

export interface AdminUser {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  authProvider: AuthProvider;
  profile_pic: string | null;
  has_validated_email: boolean;
  account_status: AccountStatus;
  lastLogin: string;
  createdAt: string;
  settings: { subscriptionTier: SubscriptionTier; proGrantedAt: string | null } | null;
}

export interface AdminUserDetail extends AdminUser {
  gender: "MALE" | "FEMALE" | "OTHER" | null;
  has_onboarded: boolean;
  deviceType: string | null;
  updatedAt: string;
  profession: { name: string } | null;
  subscription: { isActive: boolean; expiresAt: string | null; lastSyncedAt: string | null } | null;
  _count: {
    jobApplications: number;
    resumes: number;
    coverLetters: number;
    notes: number;
    voiceRecordings: number;
    interviewAnswers: number;
  };
}

export interface AdminStats {
  totalUsers: number;
  newUsers: number;
  proUsers: number;
  suspendedUsers: number;
  applications: number;
  resumes: number;
  coverLetters: number;
  recentUsers: AdminUser[];
  proForEveryone: boolean;
}
