import { Reveal } from "@/components/shared/reveal";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = function ({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold text-brand">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-foreground-muted">{description}</p>}
    </Reveal>
  );
};
