import { ExternalLink, Quote, Star } from 'lucide-react'
import { ActionLink } from '@/components/ui/action-link'
import { SectionHeading } from '@/components/ui/section-heading'
import { company } from '@/config/site'

// Avaliações reais do Perfil da Empresa no Google, com o texto como o cliente escreveu (só pontuação e abreviações ajustadas).
// Nome com a inicial do sobrenome. Avaliações sem texto ficam só no Google.
const reviews = [
  {
    name: 'Henrique S.',
    detail: 'Fiação elétrica em residência',
    text: 'Fiz toda a fiação elétrica para a sala da minha casa onde foi colocado gesso. Ficou extremamente bem feito.',
  },
  {
    name: 'Cleverson M.',
    detail: 'Cliente ZancaVolt',
    text: 'Super recomendo. Excelente profissional. Comprometido com prazo e capacitado no que faz.',
  },
]

export function Testimonials() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8">
        <SectionHeading
          id="avaliacoes-title"
          eyebrow="Avaliações"
          title="O que nossos clientes dizem no Google"
          description="Avaliações reais de clientes da ZancaVolt no Perfil da Empresa no Google."
        />

        <ul className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <li key={review.name} className="flex flex-col gap-6 rounded-xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex gap-1" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="size-8 text-border" aria-hidden="true" />
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-foreground md:text-lg">
                {`“${review.text}”`}
              </blockquote>
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink font-heading text-sm font-bold text-primary"
                  aria-hidden="true"
                >
                  {review.name[0]}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.detail} · Avaliação no Google</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <ActionLink href={company.googleProfile} external variant="outline-light">
            Ver todas as avaliações no Google
            <ExternalLink aria-hidden="true" />
            <span className="sr-only">(abre em nova aba)</span>
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
