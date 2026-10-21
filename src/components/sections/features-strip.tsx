import { Clock, FileCheck, HardHat, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Clock, title: 'Atendimento rápido', text: 'Retorno ágil e agendamento flexível.' },
  { icon: HardHat, title: 'Profissionais qualificados', text: 'Equipe treinada e experiente.' },
  { icon: ShieldCheck, title: 'Normas de segurança', text: 'Trabalho seguro e dentro da lei.' },
  { icon: FileCheck, title: 'Orçamento sem compromisso', text: 'Proposta clara e transparente.' },
]

export function FeaturesStrip() {
  return (
    <section aria-label="Nossos diferenciais" className="relative z-10 px-5 md:px-8">
      <ul className="mx-auto -mt-12 grid max-w-7xl grid-cols-1 overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-ink-shadow/10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex items-start gap-4 border-b border-border p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-ink text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
