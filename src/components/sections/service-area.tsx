import { Clock, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { company, serviceAreas } from '@/config/site'

// "08:00" → "8h".
const hora = (horario: string) => `${Number(horario.split(':')[0])}h`

// Cidades atendidas e horário escritos no próprio site, para o Google ligar a ZancaVolt às buscas
// "eletricista em <cidade>" (SEO local). As cidades e o horário são os mesmos do Perfil da Empresa no Google.
export function ServiceArea() {
  return (
    <section id="onde-atendemos" aria-labelledby="onde-atendemos-title" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8">
        <SectionHeading
          id="onde-atendemos-title"
          eyebrow="Onde atendemos"
          title="Eletricista em São José dos Pinhais, Curitiba e região"
          description="Vamos até você: atendemos residências, comércios, condomínios e indústrias em até cerca de 40 km de São José dos Pinhais."
        />

        <ul className="flex flex-wrap justify-center gap-3" aria-label="Cidades atendidas">
          {serviceAreas.map((city) => (
            <li
              key={city}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              <MapPin className="size-4 text-primary-dark" aria-hidden="true" />
              {city}
            </li>
          ))}
        </ul>

        <div className="mx-auto flex flex-col items-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:gap-3">
          <Clock className="size-4 text-primary-dark" aria-hidden="true" />
          <span className="font-semibold text-foreground">Horário de atendimento:</span>
          <span>{company.hours.map((h) => `${h.label}, ${hora(h.opens)} às ${hora(h.closes)}`).join(' · ')}</span>
        </div>
      </div>
    </section>
  )
}
