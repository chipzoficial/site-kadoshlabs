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
            Posicionamento mais claro, técnico e confiável para pequenas operações que
            precisam evoluir com critério.
          </div>
        </div>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          <div className="section-kicker">Como a KadoshLabs atua</div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            Desenvolvimento com direção, critério técnico e atenção ao uso real.
          </h3>
          <p className="max-w-2xl text-base leading-8 text-muted">
            A empresa atua como software house e laboratório de produtos para sistemas
            web, microSaaS, automações e integrações. O objetivo não é só entregar uma
            interface bonita, mas criar uma estrutura que organize processos, facilite a
            rotina e sustente crescimento com clareza.
          </p>
        </div>

        <div className="grid gap-5">
          {highlights.map((item) => (
            <article key={item.title} className="space-y-2 border-l border-white/8 pl-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                {item.title}
              </div>
              <div className="text-sm leading-7 text-foreground">{item.description}</div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
