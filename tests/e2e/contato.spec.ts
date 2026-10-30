import { test, expect } from '@playwright/test'

test('todos os links de WhatsApp usam o número da ZancaVolt', async ({ page }) => {
  await page.goto('/')

  const links = page.locator('a[href*="api.whatsapp.com"]')
  const total = await links.count()
  expect(total).toBeGreaterThan(0)

  for (let i = 0; i < total; i++) {
    await expect(links.nth(i)).toHaveAttribute('href', /phone=5541987147142/)
  }
})

test('a página não mostra os dados de contato antigos', async ({ page }) => {
  await page.goto('/')

  const textos = ['(19) 99999-9999', 'contato@zancavolt.com.br', 'Campinas', '00.000.000/0001-00']

  for (const texto of textos) {
    await expect(page.locator('body')).not.toContainText(texto)
  }
})

// Testes 3 e 4: código escrito pelo Claude a pedido do QA; cenários definidos pelo QA (critérios 4 e 5 da ZV-24).

test('a mensagem do WhatsApp chega com acentos, &, # e emoji como foram digitados', async ({ page }) => {
  // Responde no lugar do WhatsApp: o teste confere o nosso site, e não o site do WhatsApp.
  await page.context().route('https://api.whatsapp.com/**', (rota) => rota.fulfill({ body: 'ok' }))
  await page.goto('/')

  await page.getByLabel('Nome').fill('José & Filhos')
  await page.getByLabel('Telefone').fill('(41) 99999-9999')
  await page.getByLabel('Cidade').fill('São José dos Pinhais')
  await page.getByLabel('Tipo de serviço').selectOption('Instalação de alarmes')
  await page.getByLabel('Mensagem').fill('Casa #2, 100% urgente? 👍')

  // Fica de olho na aba nova antes de clicar, para não perder o momento em que ela abre.
  const abaNova = page.waitForEvent('popup')
  await page.getByRole('button', { name: 'Enviar' }).click()
  const whatsapp = await abaNova

  const link = new URL(whatsapp.url())
  const mensagem = link.searchParams.get('text')

  expect(link.searchParams.get('phone')).toBe('5541987147142')
  expect(mensagem).toContain('*Nome:* José & Filhos')
  expect(mensagem).toContain('*Cidade:* São José dos Pinhais')
  expect(mensagem).toContain('*Serviço:* Instalação de alarmes')
  expect(mensagem).toContain('*Detalhes:* Casa #2, 100% urgente? 👍')
})

test('o formulário vazio mostra as mensagens de erro e não abre o WhatsApp', async ({ page }) => {
  await page.goto('/')

  // Anota se alguma aba nova abrir durante o teste.
  let abriuWhatsapp = false
  page.on('popup', () => {
    abriuWhatsapp = true
  })

  await page.getByRole('button', { name: 'Enviar' }).click()

  await expect(page.getByText('Informe o seu nome.')).toBeVisible()
  await expect(page.getByText('Informe um telefone ou WhatsApp para contato.')).toBeVisible()
  await expect(page.getByText('Informe a sua cidade.')).toBeVisible()
  await expect(page.getByText('Selecione o tipo de serviço.')).toBeVisible()
  expect(abriuWhatsapp).toBe(false)
})
