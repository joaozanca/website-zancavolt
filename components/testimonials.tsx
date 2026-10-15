'use client'

import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Ricardo Almeida',
    role: 'Gerente de manutenção • Indústria',
    text: 'Montaram nossos painéis de comando com acabamento impecável e dentro do prazo. Equipe organizada e muito técnica.',
  },
  {
    name: 'Fernanda Costa',
    role: 'Síndica • Condomínio residencial',
    text: 'Instalaram câmeras e cerca elétrica em todo o condomínio. Atendimento rápido e os moradores se sentem muito mais seguros.',
  },
  {
    name: 'Marcos Oliveira',
    role: 'Proprietário • Comércio',
    text: 'Fizeram toda a rede de ar comprimido da oficina em PPR. Serviço limpo, sem vazamentos e com preço justo.',
  },
]

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)

  function goTo(i: number) {
    const track = trackRef.current
    if (!track) return
    const next = Math.max(0, Math.min(testimonials.length - 1, i))
    const card = track.children[next] as HTMLElement | undefined
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }

  function handleScroll() {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    if (!card) return
    const maxScroll = track.scrollWidth - track.clientWidth
    const i = track.scrollLeft >= maxScroll - 4 ? testimonials.length - 1 : Math.round(track.scrollLeft / card.offsetWidth)
    setIndex(i)
  }

  return (
    <section aria-labelledby="depoimentos-title" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="depoimentos-title"
            align="left"
            eyebrow="Depoimentos"
            title="O que nossos clientes dizem"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label="Depoimento anterior"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-foreground disabled:opacity-40"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === testimonials.length - 1}
              aria-label="Próximo depoimento"
              className="flex size-11 items-center justify-center rounded-full bg-ink text-ink-foreground transition-colors hover:bg-slate-800 disabled:opacity-40"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          onScroll={handleScroll}
          aria-roledescription="carrossel"
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto"
        >
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${testimonials.length}`}
              className="flex shrink-0 basis-full snap-start flex-col gap-6 rounded-xl border border-border bg-card p-7 shadow-sm md:basis-[calc(50%-0.625rem)] lg:basis-[calc(45%-0.625rem)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="size-8 text-border" aria-hidden="true" />
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-foreground md:text-lg">
                {`“${t.text}”`}
              </blockquote>
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-ink font-heading text-sm font-bold text-primary">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-2" aria-hidden="true">
          {testimonials.map((t, i) => (
            <span
              key={t.name}
              className={cn('h-1.5 rounded-full transition-all', i === index ? 'w-8 bg-ink' : 'w-1.5 bg-input')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
