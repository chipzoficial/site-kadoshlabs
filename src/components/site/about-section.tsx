import { SectionShell } from "@/components/site/section-shell";

const highlights = [
  {
    title: "Direção",
    description: "Soluções que equilibram operação, experiência e crescimento.",
  },
  {
    title: "Perfil",
    description: "Software house focada em pequenos negócios e produtos próprios.",
  },
  {
    title: "Como trabalhamos",
    description: "Desenvolvimento com clareza, critério técnico e foco em uso real.",
  },
];

export function AboutSection() {
  return (
    <SectionShell
      id="sobre"
      eyebrow="Sobre"
      title="Sistemas úteis, modernos e acessíveis para pequenas operações."
      description="A KadoshLabs nasceu para transformar ideias em sistemas úteis, modernos e acessíveis. Nosso foco é criar soluções digitais que ajudem empresas a organizar processos, melhorar atendimento, automatizar rotinas e crescer com mais controle."
      aside={
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
            Base institucional
          </div>
          <div className="text-sm leading-7 text-muted">
            Um posicionamento mais claro, técnico e confiável para pequenas operações
            que precisam evoluir com critério.
          </div>
        </div>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="subcard p-6 sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="section-kicker">Como a KadoshLabs atua</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            Desenvolvimento com direção, critério técnico e atenção ao uso real.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
            A empresa atua como software house e laboratório de produtos para sistemas
            web, microSaaS, automações e integrações. O objetivo não é só entregar uma
            interface bonita, mas criar uma estrutura que organize processos, facilite a
            rotina e sustente crescimento com clareza.
          </p>
        </article>

        <div className="subcard-soft p-4">
          <div className="grid gap-3">
            {highlights.map((item) => (
              <article key={item.title} className="subcard p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                  {item.title}
                </div>
                <div className="mt-3 text-sm leading-7 text-foreground">
                  {item.description}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
