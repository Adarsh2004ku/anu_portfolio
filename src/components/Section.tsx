import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 space-y-4"
    >
      {title && (
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
