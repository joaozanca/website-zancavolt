'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ActionLink } from '@/components/ui/action-link'
import { Logo } from '@/components/layout/logo'
import { navItems, whatsappLink } from '@/config/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-border bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Logo />

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink href={whatsappLink()} external size="sm" className="hidden sm:inline-flex">
            Solicitar Orçamento
          </ActionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg text-ink-foreground hover:bg-overlay/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-ink-border bg-ink lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink-foreground hover:bg-overlay/5 hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <ActionLink href={whatsappLink()} external className="w-full">
                Solicitar Orçamento
              </ActionLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
