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
      className="scroll-mt-24 space-y-4 transform-gpu transition duration-500 ease-out motion-safe:translate-y-2 motion-safe:opacity-0 motion-safe:[&.is-visible]:translate-y-0 motion-safe:[&.is-visible]:opacity-100"
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
