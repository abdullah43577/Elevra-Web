import { Button } from "@/components/ui/button";

interface Props {
  isSuspended: boolean;
  onToggleSuspend: () => void;
  onDelete: () => void;
}

const ActionRow = function ({ title, description, action }: { title: string; description: string; action: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-4">
      <div className="max-w-md">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  );
};

export const DangerZoneCard = function ({ isSuspended, onToggleSuspend, onDelete }: Props) {
  return (
    <div className="rounded-2xl border border-line bg-white px-5 pt-5 pb-1">
      <p className="text-sm font-semibold text-foreground">Account actions</p>
      <div className="divide-y divide-line">
        <ActionRow
          title={isSuspended ? "Reinstate account" : "Suspend account"}
          description={isSuspended ? "Let them sign in again. Their data was never touched." : "Blocks sign-in and token refresh. Nothing is deleted, and you can undo it."}
          action={
            <Button variant="outline" onClick={onToggleSuspend}>
              {isSuspended ? "Reinstate" : "Suspend"}
            </Button>
          }
        />
        <ActionRow
          title="Delete account"
          description="Permanently removes the account and everything it owns. This cannot be undone."
          action={
            <Button variant="destructive" onClick={onDelete}>
              Delete
            </Button>
          }
        />
      </div>
    </div>
  );
};
