"use client";

import { AppInput } from "@/components/shared/app-input";
import { AppSimpleSelect } from "@/components/shared/app-simple-select";
import { PageHeader } from "@/components/shared/page-header";
import { PaginationControls } from "@/components/shared/table-helpers";
import { useDebounce } from "@/hooks/use-debounce";
import { useGetData } from "@/hooks/use-get-data";
import { API_ENDPOINTS } from "@/lib/endpoints";
import { buildQuery } from "@/lib/utils";
import type { AdminUser } from "@/types/admin";
import type { APIResponse, Paginated } from "@/types/response";
import { useState } from "react";
import { UsersTable } from "../_components/users-table";

const STATUS_OPTIONS = [
  { label: "All statuses", value: "all" },
  { label: "Active", value: "ACTIVE" },
  { label: "Suspended", value: "DEACTIVATED" },
];

const TIER_OPTIONS = [
  { label: "All plans", value: "all" },
  { label: "Free", value: "FREE" },
  { label: "Pro", value: "PRO" },
];

export default function AdminUsersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [tier, setTier] = useState("all");
  const debouncedSearch = useDebounce(search);

  const query = buildQuery({
    page,
    limit: 20,
    search: debouncedSearch || undefined,
    status: status === "all" ? undefined : status,
    tier: tier === "all" ? undefined : tier,
  });

  const { data, isFetching } = useGetData<APIResponse<Paginated<AdminUser>>>({ url: API_ENDPOINTS.admin.users.list(query) });
  const result = data?.data;

  const handleFilterChange = function (setter: (value: string) => void) {
    return (value: string) => {
      setter(value);
      setPage(1);
    };
  };

  return (
    <div>
      <PageHeader title="Users" description="Everyone with an Elevra account. Admin accounts are not listed." />

      <div className="mb-4 flex flex-wrap gap-3">
        <AppInput type="search" placeholder="Search name or email" containerClassName="w-full sm:max-w-xs" value={search} onChange={event => handleFilterChange(setSearch)(event.target.value)} />
        <AppSimpleSelect containerClassName="w-40" value={status} onValueChange={handleFilterChange(setStatus)} options={STATUS_OPTIONS} />
        <AppSimpleSelect containerClassName="w-36" value={tier} onValueChange={handleFilterChange(setTier)} options={TIER_OPTIONS} />
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <UsersTable users={result?.data ?? []} isLoading={isFetching} emptyMessage="No users match this view." />
        <PaginationControls page={result?.page ?? 1} totalPages={result?.totalPages ?? 1} total={result?.total ?? 0} onPageChange={setPage} />
      </div>
    </div>
  );
}
