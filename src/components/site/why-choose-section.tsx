import { SectionShell } from "@/components/site/section-shell";

const reasons = [
  {
    title: "Tecnologia moderna",
    description:
      "Soluções construídas com stack atual, pensando em desempenho, manutenção e evolução.",
  },
  {
    title: "Interfaces simples e responsivas",
    description:
      "Telas objetivas, organizadas e preparadas para uso em desktop e mobile.",
  },
  {
    title: "Foco em problemas reais",
    description:
      "Cada funcionalidade deve resolver uma necessidade prática do negócio.",
  },
  {
    title: "Estrutura preparada para crescimento",
    description:
      "Base pensada para múltiplos clientes, integrações e evolução gradual.",
  },
  {
    title: "Soluções pensadas para uso prático",
    description:
      "Menos aparência vazia, mais clareza operacional para quem usa todos os dias.",
  },
];

export function WhyChooseSection() {
  return (
    <SectionShell
      eyebrow="Por que escolher"
      title="Uma software house enxuta, técnica e orientada ao uso real."
      description="A proposta da KadoshLabs é combinar boa engenharia com leitura clara do negócio, evitando sistemas confusos, pesados ou desconectados da rotina da equipe."
      aside={
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
            Critério de entrega
          </div>
          <div className="text-sm leading-7 text-muted">
            Mais profundidade operacional, menos camadas decorativas e mais clareza para
            quem usa o produto todos os dias.
          </div>
        </div>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl space-y-4">
          <div className="section-kicker">Confiança técnica</div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Boa engenharia precisa aparecer na operação e não apenas no discurso.
          </h3>
          <p className="text-base leading-8 text-muted">
            A KadoshLabs trabalha com arquitetura enxuta, interfaces claras e uma leitura
            prática do negócio. Isso reduz excesso, melhora adoção e cria uma base mais
            confiável para atender o dia a dia da equipe.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="space-y-3 border-l border-white/8 pl-4">
              <div className="text-xs uppercase tracking-[0.22em] text-emerald">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold leading-7 text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-7 text-muted">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
