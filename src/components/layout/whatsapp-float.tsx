'use client'

import { useEffect, useState } from 'react'
import { WhatsAppIcon } from '@/components/ui/brand-icons'
import { whatsappLink } from '@/config/site'
import { cn } from '@/lib/utils'

// Enquanto a seção Contato ou o rodapé aparecem na tela, o botão sai de cena: ali ele cobriria o
// formulário e o fim da página, que não dá para rolar para fora dele. Os dois já têm o contato do
// WhatsApp (ZV-27).
function useContactOrFooterInView() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const targets = [document.getElementById('contato'), document.querySelector('footer')].filter(
      (el): el is HTMLElement => el !== null,
    )
    const visible = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setInView(visible.size > 0)
    })
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return inView
}

export function WhatsAppFloat() {
  const hidden = useContactOrFooterInView()

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a ZancaVolt no WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={cn(
        'fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-ink-shadow/25 transition-[transform,opacity] hover:scale-105 focus-visible:ring-4 focus-visible:ring-ring motion-reduce:transition-none md:right-8 md:bottom-8 md:size-16',
        hidden && 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30 motion-reduce:hidden"
        aria-hidden="true"
      />
      <WhatsAppIcon className="relative size-7 md:size-8" />
    </a>
  )
}
