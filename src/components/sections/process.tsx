import { ClipboardList, Hammer, MessageCircle, Search } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
  { icon: MessageCircle, title: 'Contato', text: 'Você nos chama pelo WhatsApp ou formulário e conta sua necessidade.' },
  { icon: Search, title: 'Visita técnica', text: 'Avaliamos o local, levantamos medidas e entendemos o cenário.' },
  { icon: ClipboardList, title: 'Orçamento', text: 'Enviamos uma proposta detalhada, clara e sem compromisso.' },
  { icon: Hammer, title: 'Execução e entrega', text: 'Executamos com segurança, testamos tudo e entregamos no prazo.' },
]

export function Process() {
  return (
    <section aria-labelledby="processo-title" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="circuit-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-8">
        <SectionHeading
          id="processo-title"
          tone="dark"
          eyebrow="Como trabalhamos"
          title="Um processo simples, do primeiro contato à entrega"
        />

        <div className="relative">
          <div
            className="absolute top-7 bottom-7 left-7 w-px bg-gradient-to-b from-primary via-primary/40 to-primary/10 md:top-7 md:right-[12.5%] md:bottom-auto md:left-[12.5%] md:h-px md:w-auto md:bg-gradient-to-r"
            aria-hidden="true"
          />
          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
              <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-ink text-primary">
                <Icon className="size-6" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </span>
              <div className="flex flex-col gap-2 pt-2 md:pt-0">
                <h3 className="text-lg font-bold text-ink-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted md:mx-auto md:max-w-56">{text}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
