import Link from "next/link";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Solucoes", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-border bg-panel p-6 shadow-[var(--shadow)]">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-3">
            <div className="text-2xl font-semibold tracking-tight text-foreground">
              KadoshLabs
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Sistemas web, microSaaS, automacoes e integracoes para empresas que
              precisam operar com mais clareza, velocidade e controle.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-panel-strong px-4 py-2 text-sm text-muted hover:border-border-strong hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-5 text-sm text-muted-2">
          © 2026 KadoshLabs. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
