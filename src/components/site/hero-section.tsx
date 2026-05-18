import Link from "next/link";

const metrics = [
  { label: "Foco", value: "SaaS, automação e operação" },
  { label: "Entrega", value: "Fluxos claros e interfaces objetivas" },
  { label: "Estrutura", value: "Base pronta para crescimento" },
];

const productSignals = [
  { name: "BellaPro", detail: "Agendamento e gestão para beleza" },
  { name: "FluxOS", detail: "Chamados, O.S. e operação em campo" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="section-frame px-6 py-7 sm:px-7 sm:py-8 xl:px-9 xl:py-10">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
            <div className="flex flex-col gap-8">
              <div className="space-y-5">
                <span className="section-kicker">KadoshLabs Software Lab</span>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
                  Sistemas inteligentes para empresas que querem operar melhor.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted">
                  A KadoshLabs desenvolve sistemas web, automações e soluções SaaS para
                  negócios que precisam vender, atender e gerenciar com mais clareza,
                  velocidade e controle.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="#solucoes" className="action-primary">
                  Conhecer soluções
                </Link>
                <Link href="#contato" className="action-secondary">
                  Entrar em contato
                </Link>
              </div>

              <div className="soft-divider pt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {metrics.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                        {item.label}
                      </div>
                      <div className="text-sm leading-6 text-foreground">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/6 bg-white/[0.03] p-5">
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-2">
                      Painel de operação
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      Visão clara de processos, integrações e produtos.
                    </h2>
                  </div>
                  <span className="rounded-full border border-emerald/20 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald">
                    Dashboard
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 rounded-[1.1rem] bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                      Métrica de processos
                    </div>
                    <div className="text-3xl font-semibold text-foreground">82%</div>
                    <div className="text-sm leading-6 text-muted">
                      Fluxos organizados para reduzir retrabalho operacional.
                    </div>
                  </div>
                  <div className="space-y-2 rounded-[1.1rem] bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                      Métrica de integrações
                    </div>
                    <div className="text-3xl font-semibold text-foreground">12</div>
                    <div className="text-sm leading-6 text-muted">
                      Conexões críticas entre atendimento, dados e pagamentos.
                    </div>
                  </div>
                </div>

                <div className="soft-divider pt-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_0.88fr]">
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                        Status dos produtos
                      </div>
                      {productSignals.map((product) => (
                        <div
                          key={product.name}
                          className="flex items-center justify-between gap-4 rounded-[1rem] bg-white/[0.03] px-4 py-3"
                        >
                          <div>
                            <div className="text-sm font-semibold text-foreground">
                              {product.name}
                            </div>
                            <div className="text-sm text-muted">{product.detail}</div>
                          </div>
                          <span className="text-xs text-emerald">Em desenvolvimento</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                        Atividade operacional
                      </div>
                      <div className="rounded-[1rem] bg-white/[0.03] p-4">
                        <div className="space-y-3 text-sm text-muted">
                          <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-emerald" />
                            <span>Fluxo de atendimento organizado</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-emerald" />
                            <span>Integrações em camadas críticas</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-emerald" />
                            <span>Produtos próprios em evolução</span>
                          </div>
                        </div>
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
