interface Props {
  label: string;
  value: React.ReactNode;
}

export const InfoRow = function ({ label, value }: Props) {
  return (
    <div className="flex justify-between gap-4 py-2.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-right text-sm font-medium text-foreground">{value}</span>
    </div>
  );
};
