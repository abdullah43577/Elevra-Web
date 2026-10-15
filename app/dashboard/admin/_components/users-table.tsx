"use client";

import { TableEmptyRow, TableSkeletonRows } from "@/components/shared/table-helpers";
import { AccountStatusBadge, TierBadge } from "@/components/shared/user-badges";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate, formatRelative, fullName } from "@/lib/format";
import { ADMIN_HOME } from "@/lib/utils";
import type { AdminUser } from "@/types/admin";
import { useRouter } from "next/navigation";

const COLUMNS = 5;

interface Props {
  users: AdminUser[];
  isLoading: boolean;
  emptyMessage: string;
}

export const UsersTable = function ({ users, isLoading, emptyMessage }: Props) {
  const router = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last active</TableHead>
          <TableHead>Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading && users.length === 0 ? (
          <TableSkeletonRows columns={COLUMNS} />
        ) : users.length === 0 ? (
          <TableEmptyRow columns={COLUMNS} message={emptyMessage} />
        ) : (
          users.map(user => (
            <TableRow key={user.id} className="cursor-pointer" onClick={() => router.push(`${ADMIN_HOME}/users/${user.id}`)}>
              <TableCell>
                <p className="font-medium text-foreground">{fullName(user) || "No name"}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </TableCell>
              <TableCell>
                <TierBadge user={user} />
              </TableCell>
              <TableCell>
                <AccountStatusBadge user={user} />
              </TableCell>
              <TableCell className="text-muted-foreground">{formatRelative(user.lastLogin)}</TableCell>
              <TableCell className="text-muted-foreground">{formatDate(user.createdAt)}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
