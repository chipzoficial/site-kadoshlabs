import { SectionShell } from "@/components/site/section-shell";

const services = [
  {
    title: "Sistemas SaaS",
    description:
      "Aplicações web modernas para gestão, atendimento, agendamento, operação e controle.",
    detail: "Estrutura de produto",
  },
  {
    title: "Automações",
    description:
      "Fluxos inteligentes para reduzir tarefas manuais, integrar ferramentas e acelerar processos.",
    detail: "Eficiência operacional",
  },
  {
    title: "Sistemas sob medida",
    description:
      "Plataformas criadas para resolver necessidades específicas de cada negócio.",
    detail: "Processos específicos",
  },
  {
    title: "Integrações",
    description:
      "Conexões com APIs, WhatsApp, pagamentos, bancos de dados, armazenamento e ferramentas externas.",
    detail: "Ecossistema conectado",
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="solucoes"
      eyebrow="O que fazemos"
      title="Soluções digitais para organizar operação, atendimento e crescimento."
      description="Cada bloco foi pensado para resolver problemas reais de negócio com estrutura moderna, manutenção simples e experiência consistente em desktop e mobile."
      aside={
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
            Escopo da atuação
          </div>
          <div className="text-sm leading-7 text-muted">
            Projetos orientados a operação, rotina da equipe, clareza de uso e evolução
            sustentável do produto.
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <article key={service.title} className="item-card p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-soft text-xs font-semibold text-emerald">
                0{index + 1}
              </span>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                {service.detail}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
