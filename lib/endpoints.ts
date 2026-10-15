export const API_ENDPOINTS = {
  auth: {
    signin: "/auth/signin",
    refresh: "/auth/token",
    getProfile: "/auth/profile",
  },

  admin: {
    stats: "/admin/stats",

    users: {
      list: (query = "") => `/admin/users${query}`,
      detail: (userId: string) => `/admin/users/${userId}`,
      updateStatus: (userId: string) => `/admin/users/${userId}/status`,
      updateTier: (userId: string) => `/admin/users/${userId}/tier`,
      remove: (userId: string) => `/admin/users/${userId}`,
    },
  },
} as const;
