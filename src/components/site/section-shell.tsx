import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  aside,
}: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-frame px-6 py-7 sm:px-7 sm:py-8 xl:px-9 xl:py-10">
          <div className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
              <div className="max-w-3xl space-y-4">
                <span className="section-kicker">{eyebrow}</span>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
                  {title}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  {description}
                </p>
              </div>
              {aside ? (
                <div className="rounded-[1.35rem] border border-white/6 bg-white/[0.02] p-5">
                  {aside}
                </div>
              ) : null}
            </div>
            <div className="soft-divider mt-7 pt-7">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
