"use client";

import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { useGetData } from "@/hooks/use-get-data";
import { API_ENDPOINTS } from "@/lib/endpoints";
import { ADMIN_HOME } from "@/lib/utils";
import type { AdminStats } from "@/types/admin";
import type { APIResponse } from "@/types/response";
import Link from "next/link";
import { ProForEveryoneNotice } from "./_components/pro-for-everyone-notice";
import { StatsGrid } from "./_components/stats-grid";
import { UsersTable } from "./_components/users-table";

export default function AdminOverviewPage() {
  const { data, isFetching } = useGetData<APIResponse<AdminStats>>({ url: API_ENDPOINTS.admin.stats });
  const stats = data?.data;

  return (
    <div>
      <PageHeader title="Overview" description="How Elevra is doing today." />

      {stats?.proForEveryone && <ProForEveryoneNotice />}

      <StatsGrid stats={stats} />

      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="text-sm font-semibold text-foreground">Newest users</p>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`${ADMIN_HOME}/users`}>View all</Link>
          </Button>
        </div>
        <UsersTable users={stats?.recentUsers ?? []} isLoading={isFetching} emptyMessage="No one has signed up yet." />
      </div>
    </div>
  );
}
