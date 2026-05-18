import Link from "next/link";

const metrics = [
  { label: "Foco", value: "SaaS, automação e operação" },
  { label: "Entrega", value: "Fluxos claros e interfaces objetivas" },
  { label: "Estrutura", value: "Base pronta para crescimento" },
];

const activity = [
  "Fluxo de atendimento organizado",
  "Integrações em camadas críticas",
  "Produtos próprios em evolução",
];

const productSignals = [
  {
    name: "BellaPro",
    detail: "Agendamento e gestão para beleza",
    status: "Em desenvolvimento",
  },
  {
    name: "FluxOS",
    detail: "Chamados, O.S. e operação em campo",
    status: "Em desenvolvimento",
  },
];

export function HeroSection() {
  return (
    <section id="inicio" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="section-frame overflow-hidden p-4 sm:p-5 xl:p-6">
          <div className="subcard relative z-10 overflow-hidden p-6 sm:p-7 lg:p-8 xl:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,197,139,0.11),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_28%)]" />
            <div className="relative grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="flex min-h-full flex-col justify-between gap-8">
                <div className="space-y-6">
                  <span className="section-kicker">KadoshLabs Software Lab</span>
                  <div className="space-y-4">
                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.8rem] lg:leading-[1.05]">
                      Sistemas inteligentes para empresas que querem operar melhor.
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                      A KadoshLabs desenvolve sistemas web, automações e soluções SaaS
                      para negócios que precisam vender, atender e gerenciar com mais
                      clareza, velocidade e controle.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href="#solucoes" className="action-primary">
                      Conhecer soluções
                    </Link>
                    <Link href="#contato" className="action-secondary">
                      Entrar em contato
                    </Link>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {metrics.map((item) => (
                      <div key={item.label} className="subcard-soft p-4">
                        <div className="mb-2 text-xs uppercase tracking-[0.24em] text-muted-2">
                          {item.label}
                        </div>
                        <div className="text-sm leading-6 text-foreground">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="subcard-soft overflow-hidden p-4 sm:p-5">
                <div className="grid h-full gap-4">
                  <div className="subcard p-5">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.26em] text-muted-2">
                          Painel de operação
                        </p>
                        <h2 className="mt-2 text-xl font-semibold text-foreground">
                          Estrutura desenhada para clareza, ritmo e decisão rápida
                        </h2>
                      </div>
                      <span className="rounded-full border border-emerald/25 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald">
                        Dashboard
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="microcard p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                          Métrica de processos
                        </div>
                        <div className="mt-3 text-3xl font-semibold text-foreground">82%</div>
                        <div className="mt-2 text-sm text-muted">
                          Fluxos organizados para reduzir retrabalho operacional.
                        </div>
                      </div>
                      <div className="microcard p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                          Métrica de integrações
                        </div>
                        <div className="mt-3 text-3xl font-semibold text-foreground">12</div>
                        <div className="mt-2 text-sm text-muted">
                          Conexões críticas entre atendimento, dados e pagamentos.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 xl:grid-cols-[1fr_0.95fr]">
                    <div className="subcard p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-muted-2">
                            Produtos
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-foreground">
                            Status dos produtos próprios
                          </h3>
                        </div>
                        <div className="h-11 w-11 rounded-2xl border border-emerald/20 bg-emerald-soft shadow-[0_0_26px_rgba(33,197,139,0.14)]" />
                      </div>

                      <div className="space-y-3">
                        {productSignals.map((product) => (
                          <div key={product.name} className="microcard p-4">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <div className="text-base font-semibold text-foreground">
                                  {product.name}
                                </div>
                                <div className="mt-1 text-sm text-muted">
                                  {product.detail}
                                </div>
                              </div>
                              <span className="rounded-full border border-emerald/25 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald">
                                {product.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="subcard p-5">
                      <div className="mb-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-2">
                          Atividade operacional
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">
                          Camadas pensadas como produto real
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {activity.map((item, index) => (
                          <div
                            key={item}
                            className="microcard flex items-center gap-3 px-4 py-3.5"
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald/20 bg-emerald-soft font-mono text-xs text-emerald">
                              0{index + 1}
                            </span>
                            <span className="text-sm leading-6 text-muted">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
