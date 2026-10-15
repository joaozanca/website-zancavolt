import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { CtaBand } from '@/components/cta-band'
import { FeaturesStrip } from '@/components/features-strip'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Testimonials } from '@/components/testimonials'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturesStrip />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
