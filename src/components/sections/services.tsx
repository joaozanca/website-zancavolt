import { ArrowRight, MessageCircle } from 'lucide-react'
import { ActionLink } from '@/components/ui/action-link'
import { SectionHeading } from '@/components/ui/section-heading'
import { services, whatsappLink, type Service } from '@/config/site'

function ServiceCard({ title, description, icon: Icon }: Service) {
  return (
    <article className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-ink-shadow/5">
      <span className="flex size-12 items-center justify-center rounded-lg bg-ink text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <a
        href={whatsappLink(`Olá! Gostaria de saber mais sobre: ${title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground after:absolute after:inset-0 hover:text-primary-darker"
      >
        Saiba mais
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        <span className="sr-only">sobre {title}</span>
      </a>
    </article>
  )
}

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title="Soluções completas em elétrica, segurança e ar comprimido"
          description="Do projeto à manutenção, cuidamos de cada etapa com qualidade técnica e segurança."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}

          <div className="flex flex-col justify-between gap-6 rounded-xl bg-ink p-7 text-ink-foreground md:col-span-2 lg:col-span-2 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Não encontrou o que precisa?</h3>
              <p className="text-sm text-ink-muted">
                Fale com nossa equipe e conte sobre o seu projeto. Encontramos a melhor solução para você.
              </p>
            </div>
            <ActionLink href={whatsappLink()} external className="w-full sm:w-fit">
              <MessageCircle />
              Falar com um técnico
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
