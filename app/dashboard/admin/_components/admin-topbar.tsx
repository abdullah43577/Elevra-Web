"use client";

import { DashboardTopbar } from "@/components/shared/dashboard-topbar";
import { AdminSidebar } from "./admin-sidebar";

export const AdminTopbar = function () {
  return <DashboardTopbar title="Admin dashboard" renderSidebar={onNavigate => <AdminSidebar className="w-full border-r-0" onNavigate={onNavigate} />} />;
};
