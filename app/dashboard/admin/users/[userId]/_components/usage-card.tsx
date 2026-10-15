import { formatCount } from "@/lib/format";
import type { AdminUserDetail } from "@/types/admin";

export const UsageCard = function ({ counts }: { counts: AdminUserDetail["_count"] }) {
  const items = [
    { label: "Applications", value: counts.jobApplications },
    { label: "Resumes", value: counts.resumes },
    { label: "Cover letters", value: counts.coverLetters },
    { label: "Notes", value: counts.notes },
    { label: "Voice notes", value: counts.voiceRecordings },
    { label: "Practice answers", value: counts.interviewAnswers },
  ];

  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <p className="text-sm font-semibold text-foreground">What they have made</p>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map(item => (
          <div key={item.label}>
            <p className="text-2xl font-semibold text-foreground">{formatCount(item.value)}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
