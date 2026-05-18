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
        <div className="section-frame overflow-hidden p-4 sm:p-5 xl:p-6">
          <div className="subcard relative z-10 p-6 sm:p-7 xl:p-8">
            <div className="grid gap-6 border-b border-white/6 pb-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div className="flex max-w-3xl flex-col gap-4">
                <span className="section-kicker">{eyebrow}</span>
                <div className="space-y-3">
                  <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.55rem]">
                    {title}
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    {description}
                  </p>
                </div>
              </div>
              {aside ? <div className="subcard-soft p-5">{aside}</div> : null}
            </div>
            <div className="pt-7">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
