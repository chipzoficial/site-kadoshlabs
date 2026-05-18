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
            Produtos apresentados com estrutura comercial mais limpa, sem excesso de
            compartimentação visual.
          </div>
        </div>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {products.map((product, index) => (
          <article key={product.name} className="item-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-emerald/20 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald">
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

              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-soft text-base font-semibold text-emerald">
                {product.name.slice(0, 2)}
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">{product.description}</p>

            <div className="soft-divider mt-5 pt-5">
              <div className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-2">
                Módulos possíveis
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.modules.map((module) => (
                  <span
                    key={module}
                    className="rounded-full bg-white/[0.04] px-3.5 py-2 text-sm text-muted"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>

            <div className="soft-divider mt-6 pt-5">
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
    </SectionShell>
  );
}
