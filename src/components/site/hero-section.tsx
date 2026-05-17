import Link from "next/link";

const metrics = [
  { label: "Foco", value: "SaaS, automacao e operacao" },
  { label: "Entrega", value: "Fluxos claros e interfaces objetivas" },
  { label: "Estrutura", value: "Base pronta para crescimento" },
];

const productSignals = [
  { name: "BellaPro", detail: "Agendamento e gestao para beleza", status: "Em desenvolvimento" },
  { name: "FluxOS", detail: "Chamados, OS e operacao em campo", status: "Em desenvolvimento" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="px-4 pb-18 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-border bg-panel p-6 shadow-[var(--shadow)] backdrop-blur sm:p-8 lg:p-10">
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center rounded-full border border-border-strong bg-emerald-soft px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald">
                KadoshLabs Software Lab
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Sistemas inteligentes para empresas que querem operar melhor.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  A KadoshLabs desenvolve sistemas web, automacoes e solucoes SaaS para
                  negocios que precisam vender, atender e gerenciar com mais clareza,
                  velocidade e controle.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#solucoes"
                  className="inline-flex items-center justify-center rounded-full border border-emerald/40 bg-emerald px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.28)] hover:-translate-y-0.5 hover:bg-emerald/90"
                >
                  Conhecer solucoes
                </Link>
                <Link
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-border-strong hover:bg-white/8"
                >
                  Entrar em contato
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-border bg-panel-strong px-4 py-4"
                  >
                    <div className="mb-2 text-xs uppercase tracking-[0.24em] text-muted-2">
                      {item.label}
                    </div>
                    <div className="text-sm leading-6 text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-panel p-5 shadow-[var(--shadow)] backdrop-blur sm:p-6">
          <div className="flex h-full flex-col gap-4">
            <div className="rounded-[1.6rem] border border-border bg-panel-strong p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-muted-2">
                    Painel de operacao
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-foreground">
                    Estrutura desenhada para clareza e decisao rapida
                  </h2>
                </div>
                <span className="rounded-full border border-emerald/25 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald">
                  Dashboard
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-border bg-panel p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                    Visao de processos
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-foreground">82%</div>
                  <div className="mt-2 text-sm text-muted">
                    Fluxos automatizados para reduzir retrabalho operacional.
                  </div>
                </div>
                <div className="rounded-[1.25rem] border border-border bg-panel p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-2">
                    Integracoes
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-foreground">12</div>
                  <div className="mt-2 text-sm text-muted">
                    Estruturas conectadas para atendimento, pagamento e dados.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-border bg-panel-strong p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-muted-2">
                    Produtos em construcao
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    Base de produtos proprios da KadoshLabs
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-2xl border border-border-strong bg-emerald-soft shadow-[0_0_30px_rgba(16,185,129,0.18)]" />
              </div>

              <div className="space-y-3">
                {productSignals.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-[1.25rem] border border-border bg-panel p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-base font-semibold text-foreground">
                          {product.name}
                        </div>
                        <div className="mt-1 text-sm text-muted">{product.detail}</div>
                      </div>
                      <span className="rounded-full border border-emerald/25 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald">
                        {product.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
