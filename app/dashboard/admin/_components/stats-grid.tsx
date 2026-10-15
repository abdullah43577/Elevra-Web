import { StatCard } from "@/components/shared/stat-card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCount } from "@/lib/format";
import type { AdminStats } from "@/types/admin";
import { BadgeCheck, Briefcase, FileText, Mail, UserMinus, UserPlus, Users } from "lucide-react";

export const StatsGrid = function ({ stats }: { stats: AdminStats | undefined }) {
  if (!stats) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-32 rounded-2xl" />
        ))}
      </div>
    );
  }

  const cards = [
    { label: "Users", value: stats.totalUsers, icon: Users },
    { label: "New this week", value: stats.newUsers, icon: UserPlus },
    { label: "On Pro", value: stats.proUsers, icon: BadgeCheck },
    { label: "Suspended", value: stats.suspendedUsers, icon: UserMinus },
    { label: "Applications", value: stats.applications, icon: Briefcase },
    { label: "Resumes", value: stats.resumes, icon: FileText },
    { label: "Cover letters", value: stats.coverLetters, icon: Mail },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(card => (
        <StatCard key={card.label} label={card.label} value={formatCount(card.value)} icon={card.icon} />
      ))}
    </div>
  );
};
