"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Solucoes", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-border bg-panel/90 px-4 py-3 shadow-[0_18px_40px_rgba(3,7,18,0.35)] backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <Link href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border-strong bg-emerald-soft text-sm font-bold text-emerald">
              KL
            </span>
            <div>
              <div className="text-base font-semibold tracking-tight text-foreground">
                KadoshLabs
              </div>
              <div className="text-xs text-muted-2">Software lab para pequenos negocios</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-emerald/40 bg-emerald px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.28)] hover:-translate-y-0.5 hover:bg-emerald/90"
            >
              Falar com a KadoshLabs
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-panel-strong text-foreground lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-4 rounded-[1.5rem] border border-border bg-panel-strong p-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm text-muted hover:border-border hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-emerald/40 bg-emerald px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Falar com a KadoshLabs
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
