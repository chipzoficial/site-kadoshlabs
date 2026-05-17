import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-panel-muted/90 p-5 shadow-[var(--shadow)] backdrop-blur xl:p-8">
          <div className="mb-8 flex max-w-3xl flex-col gap-4">
            <span className="w-fit rounded-full border border-border-strong bg-emerald-soft px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald">
              {eyebrow}
            </span>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {description}
              </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
