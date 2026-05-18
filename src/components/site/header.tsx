"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.7rem] border border-white/8 bg-panel/80 px-4 py-3 shadow-[0_18px_40px_rgba(2,6,23,0.32)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="#inicio" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald/30 bg-emerald-soft text-sm font-bold text-emerald shadow-[0_0_24px_rgba(33,197,139,0.12)]">
              KL
            </span>
            <div>
              <div className="text-base font-semibold tracking-tight text-foreground">
                KadoshLabs
              </div>
              <div className="text-xs text-muted-2">
                Software lab para pequenos negócios
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/6 bg-white/[0.03] p-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted hover:bg-white/[0.04] hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="#contato" className="action-primary px-5 py-3">
              Falar com a KadoshLabs
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-panel-strong text-foreground lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-4 rounded-[1.5rem] border border-white/8 bg-panel-strong p-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm text-muted hover:border-white/8 hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="#contato" onClick={() => setMenuOpen(false)} className="action-primary mt-4 w-full px-5 py-3">
              Falar com a KadoshLabs
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
