'use client'

import { CheckCircle2, ChevronDown, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { actionVariants } from '@/components/ui/action-link'
import { services, whatsappLink } from '@/config/site'
import { cn } from '@/lib/utils'

const fieldClass =
  'h-12 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-ink focus:ring-3 focus:ring-primary/40'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const message = [
      'Olá! Gostaria de solicitar um orçamento.',
      `Nome: ${get('nome')}`,
      `Telefone: ${get('telefone')}`,
      get('email') && `E-mail: ${get('email')}`,
      `Serviço: ${get('servico')}`,
      get('mensagem') && `Mensagem: ${get('mensagem')}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="nome" className="text-sm font-semibold text-foreground">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            required
            autoComplete="name"
            maxLength={80}
            placeholder="Seu nome completo"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefone" className="text-sm font-semibold text-foreground">
            Telefone / WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9()+\-\s]{8,20}"
            placeholder="(00) 00000-0000"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            placeholder="voce@email.com"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="servico" className="text-sm font-semibold text-foreground">
            Tipo de serviço
          </label>
          <div className="relative">
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <select
              id="servico"
              name="servico"
              required
              defaultValue=""
              className={cn(fieldClass, 'appearance-none pr-10')}
            >
              <option value="" disabled>
                Selecione um serviço
              </option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="mensagem" className="text-sm font-semibold text-foreground">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            maxLength={1000}
            placeholder="Descreva brevemente o que você precisa"
            className={cn(fieldClass, 'h-auto resize-none py-3')}
          />
        </div>
      </div>

      <button type="submit" className={cn(actionVariants({ size: 'lg' }), 'w-full')}>
        <Send />
        Enviar
      </button>

      <p className="text-center text-xs text-muted-foreground" role="status">
        {sent ? (
          <span className="inline-flex items-center gap-1.5 font-medium text-success">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            Abrimos o WhatsApp com sua mensagem. É só enviar!
          </span>
        ) : (
          'Ao enviar, sua solicitação é encaminhada para o nosso WhatsApp.'
        )}
      </p>
    </form>
  )
}
