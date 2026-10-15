"use client";

import { DashboardSidebar, type DashboardNavItem } from "@/components/shared/dashboard-sidebar";
import { ADMIN_HOME } from "@/lib/utils";
import { LayoutDashboard, Users } from "lucide-react";

const NAV_ITEMS: DashboardNavItem[] = [
  { label: "Overview", href: ADMIN_HOME, icon: LayoutDashboard },
  { label: "Users", href: `${ADMIN_HOME}/users`, icon: Users },
];

export const AdminSidebar = function ({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  return <DashboardSidebar items={NAV_ITEMS} homeHref={ADMIN_HOME} className={className} onNavigate={onNavigate} />;
};
