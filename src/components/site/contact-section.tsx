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
      description="Se você precisa organizar atendimento, agenda, operação, automações ou um sistema sob medida, a KadoshLabs pode desenhar a base certa para isso."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[1.8rem] border border-border bg-panel p-5 sm:p-6">
          <div className="rounded-[1.5rem] border border-border bg-panel-strong p-6">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Fale com a KadoshLabs
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Apresente o momento do seu negócio, o tipo de operação que você precisa
              estruturar e quais gargalos quer resolver. A partir disso, a conversa
              fica objetiva e direcionada.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-[1.2rem] border border-border bg-panel p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                  Atendimento inicial
                </div>
                <div className="mt-2 text-sm text-foreground">
                  Diagnóstico de necessidade, escopo e próximos passos.
                </div>
              </div>
              <div className="rounded-[1.2rem] border border-border bg-panel p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-muted-2">
                  Canal rápido
                </div>
                <div className="mt-2 text-sm text-foreground">
                  WhatsApp para contato comercial e alinhamento inicial.
                </div>
              </div>
            </div>

            <Link
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-emerald/40 bg-emerald px-5 py-3.5 text-sm font-semibold text-slate-950 hover:bg-emerald/90"
            >
              Chamar no WhatsApp
            </Link>
          </div>
        </article>

        <article className="rounded-[1.8rem] border border-border bg-panel p-5 sm:p-6">
          <form className="rounded-[1.5rem] border border-border bg-panel-strong p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                Formulário de contato
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Estrutura preparada para futura integração com API, e-mail ou banco de
                dados.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-muted">
                Nome
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-muted">
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="voce@empresa.com"
                  className="rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-muted">
                WhatsApp
                <input
                  type="tel"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  className="rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-muted">
                Tipo de interesse
                <select
                  name="interest"
                  defaultValue=""
                  className="rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground outline-none focus:border-border-strong"
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

            <label className="mt-4 flex flex-col gap-2 text-sm text-muted">
              Mensagem
              <textarea
                name="message"
                rows={5}
                placeholder="Descreva seu contexto, a necessidade atual e o que você deseja construir."
                className="rounded-[1.4rem] border border-border bg-panel px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-2 focus:border-border-strong"
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-emerald/40 bg-emerald px-5 py-3.5 text-sm font-semibold text-slate-950 hover:bg-emerald/90"
              >
                Enviar mensagem
              </button>
              <div className="inline-flex items-center rounded-full border border-border bg-panel px-4 py-3 text-sm text-muted">
                Formulário visual pronto para integração posterior.
              </div>
            </div>
          </form>
        </article>
      </div>
    </SectionShell>
  );
}
