import {
  Cable,
  CircuitBoard,
  Cctv,
  Clock,
  FileCheck,
  Gauge,
  HardHat,
  ShieldCheck,
  Siren,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const company = {
  name: 'ZancaVolt',
  siteUrl: 'https://zancavolt.com.br',
  phone: '(41) 98714-7142',
  phoneHref: 'tel:+5541987147142',
  whatsappNumber: '5541987147142',
  email: 'zancavolt@gmail.com',
  region: 'São José dos Pinhais, Curitiba e Região Metropolitana - PR',
  // Cidade-base para os dados estruturados (sem rua: o atendimento é no local do cliente).
  city: 'São José dos Pinhais',
  state: 'PR',
  // Vazio enquanto a empresa não tem CNPJ: o rodapé só mostra a linha quando houver número.
  cnpj: '',
  // Perfis reais da empresa. Deixe vazio ('') para a rede não aparecer no rodapé (ZV-43).
  social: {
    instagram: 'https://www.instagram.com/zanca_volt/',
    facebook: 'https://www.facebook.com/zancavolt',
    linkedin: 'https://www.linkedin.com/company/zancavolt',
  },
  // Perfil da Empresa no Google (avaliações e mapa), o mesmo link do botão "Compartilhar" do perfil.
  googleProfile: 'https://share.google/efOjAi4Je4BLcZEjw',
  // Horário de atendimento, igual ao do Perfil da Empresa no Google. Domingo fechado.
  hours: [
    {
      label: 'Segunda a sexta',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    { label: 'Sábado', days: ['Saturday'], opens: '09:00', closes: '18:00' },
  ],
}

// Cidades atendidas: as mesmas 13 do Perfil da Empresa no Google (até cerca de 40 km da base).
export const serviceAreas = [
  'São José dos Pinhais',
  'Curitiba',
  'Pinhais',
  'Colombo',
  'Araucária',
  'Fazenda Rio Grande',
  'Piraquara',
  'Campo Largo',
  'Almirante Tamandaré',
  'Quatro Barras',
  'Campina Grande do Sul',
  'Campo Magro',
  'Mandirituba',
]

// Usa o api.whatsapp.com direto: o redirecionamento do wa.me troca emojis por "�" (ZV-23).
export function whatsappLink(message = 'Olá! Vim pelo site da ZancaVolt e gostaria de solicitar um orçamento.') {
  return `https://api.whatsapp.com/send?phone=${company.whatsappNumber}&text=${encodeURIComponent(message)}`
}

// Diferenciais: aparecem na faixa abaixo do topo e no cartão da seção Contato.
export const features = [
  { icon: Clock, title: 'Atendimento rápido', text: 'Retorno ágil e agendamento flexível.' },
  { icon: HardHat, title: 'Profissionais qualificados', text: 'Equipe treinada e experiente.' },
  { icon: ShieldCheck, title: 'Normas de segurança', text: 'Trabalho seguro e dentro da lei.' },
  { icon: FileCheck, title: 'Orçamento sem compromisso', text: 'Proposta clara e transparente.' },
]

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Montagem e instalação elétrica',
    description:
      'Instalações elétricas completas, novas ou reformas, com projeto, dimensionamento e entrega dentro das normas.',
    icon: Zap,
  },
  {
    title: 'Infraestrutura elétrica',
    description: 'Tubulação, eletrocalhas, leitos e cabeamento organizados para indústrias, comércios e prédios.',
    icon: Cable,
  },
  {
    title: 'Montagem de painéis elétricos',
    description:
      'Quadros de distribuição, comando e automação montados com componentes de qualidade e identificação completa.',
    icon: CircuitBoard,
  },
  {
    title: 'Instalação de alarmes',
    description: 'Sistemas de alarme com sensores, sirenes e acionamento remoto para proteger seu patrimônio.',
    icon: Siren,
  },
  {
    title: 'CFTV, DVR e cerca elétrica',
    description: 'Câmeras de alta definição, gravação em DVR, acesso pelo celular e cerca elétrica para perímetros.',
    icon: Cctv,
  },
  {
    title: 'Ar comprimido em PPR',
    description: 'Redes de ar comprimido em PPR com baixa perda de carga, sem corrosão e instalação ágil e limpa.',
    icon: Gauge,
  },
  {
    title: 'Manutenção elétrica em geral',
    description:
      'Manutenção preventiva e corretiva, diagnóstico de falhas e adequações para mais segurança e eficiência.',
    icon: Wrench,
  },
]
