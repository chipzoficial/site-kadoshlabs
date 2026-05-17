import Link from "next/link";
import { SectionShell } from "@/components/site/section-shell";

const products = [
  {
    name: "BellaPro",
    description:
      "Sistema de agendamento e gestao para saloes de beleza, manicures, pedicures e profissionais da estetica.",
  },
  {
    name: "FluxOS",
    description:
      "Sistema para gestao de chamados, atendimentos, ordens de servico e operacao em campo.",
  },
];

export function ProductsSection() {
  return (
    <SectionShell
      id="produtos"
      eyebrow="Produtos"
      title="Produtos proprios em evolucao para nichos com operacao intensa."
      description="A KadoshLabs tambem estrutura produtos SaaS com foco pratico, interface limpa e processos claros para pequenas operacoes."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="rounded-[1.8rem] border border-border bg-panel p-5 shadow-[0_20px_40px_rgba(3,7,18,0.28)] sm:p-6"
          >
            <div className="rounded-[1.4rem] border border-border bg-panel-strong p-5">
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

                <div className="grid h-18 w-18 place-items-center rounded-[1.6rem] border border-border-strong bg-emerald-soft/70 text-lg font-semibold text-emerald">
                  {product.name.slice(0, 2)}
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
                {product.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground hover:border-border-strong hover:bg-white/8"
                >
                  Ver detalhes
                </Link>
                <Link
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-emerald/40 bg-emerald px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald/90"
                >
                  Solicitar demonstracao
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
