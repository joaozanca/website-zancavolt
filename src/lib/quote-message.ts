// Mensagem que o formulário de orçamento envia para o WhatsApp da empresa.

export type QuoteFields = {
  nome: string
  telefone: string
  email: string
  cidade: string
  servico: string
  mensagem: string
}

export type QuoteErrors = Partial<Record<keyof QuoteFields, string>>

// Aceita só dígitos, espaços, parênteses, + e -, com 10 a 13 dígitos (DDD + número, com ou sem 55).
const phoneChars = /^[0-9()+\-\s]+$/
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateQuote(fields: QuoteFields): QuoteErrors {
  const errors: QuoteErrors = {}
  if (!fields.nome) errors.nome = 'Informe o seu nome.'
  if (!fields.telefone) {
    errors.telefone = 'Informe um telefone ou WhatsApp para contato.'
  } else {
    const digits = fields.telefone.replace(/\D/g, '').length
    if (!phoneChars.test(fields.telefone) || digits < 10 || digits > 13) {
      errors.telefone = 'Telefone inválido. Use o DDD e o número, por exemplo: (41) 99999-9999.'
    }
  }
  if (fields.email && !emailFormat.test(fields.email)) {
    errors.email = 'E-mail inválido. Confira o endereço, por exemplo: voce@email.com.'
  }
  if (!fields.cidade) errors.cidade = 'Informe a sua cidade.'
  if (!fields.servico) errors.servico = 'Selecione o tipo de serviço.'
  return errors
}

export function buildQuoteMessage(fields: QuoteFields) {
  return [
    'Olá, ZancaVolt! Vim pelo site e gostaria de solicitar um orçamento.',
    `*Nome:* ${fields.nome}`,
    `*Telefone:* ${fields.telefone}`,
    fields.email && `*E-mail:* ${fields.email}`,
    `*Cidade:* ${fields.cidade}`,
    `*Serviço:* ${fields.servico}`,
    fields.mensagem && `*Detalhes:* ${fields.mensagem}`,
    'Aguardo o retorno. Obrigado!',
  ]
    .filter(Boolean)
    .join('\n')
}
