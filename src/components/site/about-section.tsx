import { SectionShell } from "@/components/site/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="sobre"
      eyebrow="Sobre"
      title="Sistemas uteis, modernos e acessiveis para pequenas operacoes."
      description="A KadoshLabs nasceu para transformar ideias em sistemas uteis, modernos e acessiveis. Nosso foco e criar solucoes digitais que ajudem empresas a organizar processos, melhorar atendimento, automatizar rotinas e crescer com mais controle."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[1.6rem] border border-border bg-panel-strong p-6">
          <h3 className="text-xl font-semibold text-foreground">
            Desenvolvimento com direcao e criterio
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-muted">
            A empresa atua como laboratorio de software para sistemas web, microSaaS,
            automacoes e integracoes, sempre com prioridade em clareza de uso,
            manutencao consistente e aderencia ao processo real do cliente.
          </p>
        </article>

        <article className="rounded-[1.6rem] border border-border bg-panel p-6">
          <div className="space-y-3">
            <div className="rounded-[1.2rem] border border-border bg-panel-strong p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                Perfil
              </div>
              <div className="mt-2 text-sm text-foreground">
                Software house focada em pequenas empresas e produtos proprios.
              </div>
            </div>
            <div className="rounded-[1.2rem] border border-border bg-panel-strong p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                Direcao
              </div>
              <div className="mt-2 text-sm text-foreground">
                Solucoes que equilibram operacao, experiencia e crescimento.
              </div>
            </div>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
