import { Zap } from 'lucide-react'
import { ActionLink } from '@/components/ui/action-link'
import { WhatsAppIcon } from '@/components/ui/brand-icons'
import { whatsappLink } from '@/config/site'

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-primary">
      <Zap
        className="absolute -top-10 -right-10 size-64 text-primary-light md:right-10"
        strokeWidth={1}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8 md:py-16">
        <h2
          id="cta-title"
          className="max-w-2xl text-2xl leading-tight font-extrabold text-primary-foreground md:text-4xl"
        >
          Precisa de um eletricista de confiança? Solicite seu orçamento agora
        </h2>
        <ActionLink href={whatsappLink()} external variant="dark" size="lg" className="w-full md:w-auto">
          <WhatsAppIcon />
          Chamar no WhatsApp
        </ActionLink>
      </div>
    </section>
  )
}
