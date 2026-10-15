import { WhatsAppIcon } from '@/components/brand-icons'
import { whatsappLink } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a ZancaVolt no WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/25 transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-primary md:right-8 md:bottom-8 md:size-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" aria-hidden="true" />
      <WhatsAppIcon className="relative size-7 md:size-8" />
    </a>
  )
}
