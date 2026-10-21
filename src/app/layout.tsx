import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ZancaVolt | Elétrica, Segurança Eletrônica e Ar Comprimido',
  description:
    'Instalação, montagem e manutenção elétrica, painéis, CFTV, alarmes, cerca elétrica e tubulação de ar comprimido em PPR para indústrias, comércios, condomínios e residências. Solicite seu orçamento.',
  keywords: [
    'eletricista',
    'instalação elétrica',
    'painéis elétricos',
    'CFTV',
    'alarmes',
    'cerca elétrica',
    'ar comprimido PPR',
    'manutenção elétrica',
  ],
  openGraph: {
    title: 'ZancaVolt | Soluções elétricas e de segurança',
    description: 'Qualidade e precisão em elétrica, segurança eletrônica e ar comprimido.',
    images: ['/images/hero-painel.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
