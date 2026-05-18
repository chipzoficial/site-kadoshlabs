import Link from "next/link";
import { SectionShell } from "@/components/site/section-shell";

const products = [
  {
    name: "BellaPro",
    description:
      "Sistema de agendamento e gestão para salões de beleza, manicures, pedicures e profissionais da estética.",
    modules: [
      "Agenda online",
      "Gestão de profissionais",
      "Serviços e horários",
      "Clientes e atendimentos",
    ],
  },
  {
    name: "FluxOS",
    description:
      "Sistema para gestão de chamados, atendimentos, ordens de serviço e operação em campo.",
    modules: [
      "Chamados",
      "Ordens de serviço",
      "Técnicos responsáveis",
      "Operação em campo",
    ],
  },
];

export function ProductsSection() {
  return (
    <SectionShell
      id="produtos"
      eyebrow="Produtos"
      title="Produtos próprios em evolução para nichos com operação intensa."
      description="A KadoshLabs também estrutura produtos SaaS com foco prático, interface limpa e processos claros para pequenas operações."
      aside={
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
            Vitrine de produto
          </div>
          <div className="text-sm leading-7 text-muted">
            Cada produto é apresentado com estrutura de header, corpo, módulos e área
            de ação para parecer oferta real, não apenas conceito.
          </div>
        </div>
      }
    >
      <div className="subcard-soft p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-2">
          {products.map((product, index) => (
            <article key={product.name} className="subcard overflow-hidden">
              <div className="border-b border-white/6 px-5 py-5 sm:px-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-emerald/25 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald">
                        Em desenvolvimento
                      </span>
                      <span className="text-xs uppercase tracking-[0.24em] text-muted-2">
                        Produto 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {product.name}
                    </h3>
                  </div>

                  <div className="grid h-18 w-18 place-items-center rounded-[1.6rem] border border-emerald/20 bg-emerald-soft/80 text-lg font-semibold text-emerald">
                    {product.name.slice(0, 2)}
                  </div>
                </div>
              </div>

              <div className="space-y-6 px-5 py-5 sm:px-6">
                <p className="max-w-xl text-sm leading-7 text-muted">
                  {product.description}
                </p>

                <div className="subcard-soft p-4">
                  <div className="mb-4 text-xs uppercase tracking-[0.24em] text-muted-2">
                    Módulos possíveis
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {product.modules.map((module) => (
                      <div key={module} className="microcard px-4 py-3 text-sm text-muted">
                        {module}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/6 px-5 py-5 sm:px-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="#contato" className="action-secondary">
                    Ver detalhes
                  </Link>
                  <Link href="#contato" className="action-primary">
                    Solicitar demonstração
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
