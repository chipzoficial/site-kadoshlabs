import { SectionShell } from "@/components/site/section-shell";

const services = [
  {
    title: "Sistemas SaaS",
    description:
      "Aplicacoes web modernas para gestao, atendimento, agendamento, operacao e controle.",
  },
  {
    title: "Automacoes",
    description:
      "Fluxos inteligentes para reduzir tarefas manuais, integrar ferramentas e acelerar processos.",
  },
  {
    title: "Sistemas sob medida",
    description:
      "Plataformas criadas para resolver necessidades especificas de cada negocio.",
  },
  {
    title: "Integracoes",
    description:
      "Conexoes com APIs, WhatsApp, pagamentos, bancos de dados, armazenamento e ferramentas externas.",
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="solucoes"
      eyebrow="O que fazemos"
      title="Solucoes digitais para organizar operacao, atendimento e crescimento."
      description="Cada bloco foi pensado para resolver problemas reais de negocio com estrutura moderna, manutencao simples e experiencia consistente em desktop e mobile."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`rounded-[1.6rem] border p-5 ${
              index === 0 || index === 3
                ? "border-border-strong bg-panel-strong"
                : "border-border bg-panel"
            }`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border-strong bg-emerald-soft text-sm font-semibold text-emerald">
                0{index + 1}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-emerald/40 to-transparent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
