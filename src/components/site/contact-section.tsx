import Link from "next/link";
import { SectionShell } from "@/components/site/section-shell";

const interestOptions = [
  "Quero um sistema sob medida",
  "Quero conhecer o BellaPro",
  "Quero conhecer o FluxOS",
  "Quero automações para minha empresa",
  "Outro assunto",
];

export function ContactSection() {
  return (
    <SectionShell
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar sobre a próxima estrutura digital da sua empresa."
      description="Se você precisa organizar atendimento, agenda, operação, automações ou um sistema sob medida, a KadoshLabs pode desenhar uma base certa para isso."
      aside={
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
            Contato comercial
          </div>
          <div className="text-sm leading-7 text-muted">
            Estrutura pronta para conversa inicial e preparada para futura integração
            com API, e-mail ou banco de dados.
          </div>
        </div>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="space-y-5">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Fale com a KadoshLabs
            </h3>
            <p className="text-sm leading-7 text-muted">
              Apresente o momento do seu negócio, o tipo de operação que você precisa
              estruturar e quais gargalos quer resolver. A partir disso, a conversa fica
              objetiva e direcionada.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2 border-l border-white/8 pl-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                Atendimento inicial
              </div>
              <div className="text-sm leading-7 text-foreground">
                Diagnóstico de necessidade, escopo e próximos passos.
              </div>
            </div>
            <div className="space-y-2 border-l border-white/8 pl-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                Canal rápido
              </div>
              <div className="text-sm leading-7 text-foreground">
                WhatsApp para contato comercial e alinhamento inicial.
              </div>
            </div>
          </div>

          <Link
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="action-primary"
          >
            Chamar no WhatsApp
          </Link>
        </article>

        <article className="rounded-[1.45rem] border border-white/7 bg-white/[0.02] p-5 sm:p-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Formulário de contato
            </h3>
            <p className="text-sm leading-7 text-muted">
              Estrutura preparada para futura integração com API, e-mail ou banco de
              dados.
            </p>
          </div>

          <form className="soft-divider mt-5 space-y-5 pt-5">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                Grupo 1 · Dados pessoais
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-muted">
                  Nome
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-muted">
                  E-mail
                  <input
                    type="email"
                    name="email"
                    placeholder="contato@empresa.com"
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-muted sm:col-span-2">
                  WhatsApp
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                Grupo 2 · Interesse
              </div>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Tipo de interesse
                <select
                  name="interest"
                  defaultValue=""
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none focus:border-border-strong"
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                Grupo 3 · Mensagem
              </div>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Mensagem
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Descreva seu contexto, a necessidade atual e o que você deseja construir."
                  className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
                />
              </label>
            </div>

            <div className="soft-divider flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" className="action-primary">
                Enviar mensagem
              </button>
              <div className="text-sm text-muted">
                Formulário visual pronto para integração posterior.
              </div>
            </div>
          </form>
        </article>
      </div>
    </SectionShell>
  );
}
