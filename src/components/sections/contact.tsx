import { Mail, MapPin, Phone, Truck } from 'lucide-react'
import type { ReactNode } from 'react'
import { WhatsAppIcon } from '@/components/ui/brand-icons'
import { ContactForm } from '@/components/sections/contact-form'
import { SectionHeading } from '@/components/ui/section-heading'
import { company, features, whatsappLink } from '@/config/site'

function ContactItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-ink text-primary [&_svg]:size-5">
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</span>
        <span className="font-semibold text-foreground">{children}</span>
      </div>
    </li>
  )
}

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading
          id="contato-title"
          eyebrow="Contato"
          title="Solicite seu orçamento"
          description="Preencha o formulário ou fale diretamente com a gente. Respondemos rapidamente."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <ul className="flex flex-col gap-5 rounded-2xl bg-muted p-6 md:p-8">
              <ContactItem icon={<Phone aria-hidden="true" />} label="Telefone">
                <a href={company.phoneHref} className="hover:text-primary-darker">
                  {company.phone}
                </a>
              </ContactItem>
              <ContactItem icon={<WhatsAppIcon />} label="WhatsApp">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-darker"
                >
                  {company.phone}
                </a>
              </ContactItem>
              <ContactItem icon={<Mail aria-hidden="true" />} label="E-mail">
                <a href={`mailto:${company.email}`} className="break-all hover:text-primary-darker">
                  {company.email}
                </a>
              </ContactItem>
              <ContactItem icon={<MapPin aria-hidden="true" />} label="Região de atendimento">
                {company.region}
              </ContactItem>
            </ul>

            {/* Ocupa o lugar do antigo mapa: a empresa não tem endereço físico, atende no local do cliente. */}
            <div className="flex flex-1 flex-col justify-center gap-6 rounded-2xl bg-ink p-6 text-ink-foreground md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-ink-hover text-primary [&_svg]:size-5">
                  <Truck aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-lg font-bold">Atendimento no local</h3>
                  <p className="text-sm text-ink-muted">
                    Vamos até você: residências, comércios, condomínios e indústrias.
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-5 border-t border-ink-border pt-6">
                {features.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-ink-hover text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-bold">{title}</h3>
                      <p className="text-sm text-ink-muted">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
