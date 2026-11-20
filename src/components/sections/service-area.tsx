import { Clock, MapPin, Wrench } from 'lucide-react'
import { company, serviceAreas } from '@/config/site'

// "08:00" → "8h".
const hora = (horario: string) => `${Number(horario.split(':')[0])}h`

// Cidades atendidas e horário escritos no próprio site, para o Google ligar a ZancaVolt às buscas
// "eletricista em <cidade>" (SEO local). As cidades e o horário são os mesmos do Perfil da Empresa no Google.
// Visual igual ao cartão "Atendimento no local" da seção Contato: fundo azul-marinho e ícones amarelos.
export function ServiceArea() {
  return (
    <section id="onde-atendemos" aria-labelledby="onde-atendemos-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-ink p-6 text-ink-foreground md:p-10">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-ink-hover text-primary [&_svg]:size-5">
              <Wrench aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Onde atendemos</span>
              <h2 id="onde-atendemos-title" className="font-heading text-2xl font-bold md:text-3xl">
                Eletricista em São José dos Pinhais, Curitiba e região
              </h2>
              <p className="text-sm text-ink-muted md:text-base">
                Vamos até você: atendemos residências, comércios, condomínios e indústrias em até cerca de 40 km de São
                José dos Pinhais.
              </p>
            </div>
          </div>

          <ul
            className="grid grid-cols-2 gap-x-4 gap-y-4 border-t border-ink-border pt-8 md:gap-x-6 lg:grid-cols-4"
            aria-label="Onde a ZancaVolt atende"
          >
            {serviceAreas.map((city) => (
              <li key={city} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-hover text-primary">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold">{city}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-4 border-t border-ink-border pt-8">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-ink-hover text-primary">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold">Horário de atendimento</h3>
              <p className="text-sm text-ink-muted">
                {company.hours.map((h) => `${h.label}, ${hora(h.opens)} às ${hora(h.closes)}`).join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
