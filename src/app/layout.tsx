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

// Endereço base dos links das metatags (imagem de compartilhamento). Na Netlify, o preview de cada PR
// usa o próprio endereço (DEPLOY_PRIME_URL); fora dela, o domínio definitivo.
const siteUrl = process.env.DEPLOY_PRIME_URL ?? process.env.URL ?? 'https://zancavolt.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ZancaVolt: soluções elétricas e de segurança' }],
    locale: 'pt_BR',
    type: 'website',
    siteName: 'ZancaVolt',
  },
  // Nome do atalho ao adicionar o site à tela inicial do iPhone.
  appleWebApp: { title: 'ZancaVolt' },
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
