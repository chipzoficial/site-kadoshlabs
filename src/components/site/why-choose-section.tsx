import { SectionShell } from "@/components/site/section-shell";

const reasons = [
  "Tecnologia moderna",
  "Interfaces simples e responsivas",
  "Foco em problemas reais de negocio",
  "Estrutura preparada para crescimento",
  "Solucoes pensadas para uso pratico, nao apenas aparencia",
];

export function WhyChooseSection() {
  return (
    <SectionShell
      eyebrow="Por que escolher"
      title="Uma software house enxuta, tecnica e orientada a uso real."
      description="A proposta da KadoshLabs e combinar boa engenharia com leitura clara do negocio, evitando sistemas confusos, pesados ou desconectados da rotina da equipe."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {reasons.map((reason, index) => (
          <article
            key={reason}
            className={`rounded-[1.45rem] border p-5 ${
              index === 1 || index === 4
                ? "border-border-strong bg-panel-strong"
                : "border-border bg-panel"
            }`}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/5 font-mono text-sm text-emerald">
              {index + 1}
            </div>
            <h3 className="text-base font-semibold leading-7 text-foreground">{reason}</h3>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
