// Padrão de commit do projeto: tipo(ZV-n): descrição — ex.: feat(ZV-13): envia o formulário para o WhatsApp
const JIRA_KEY = /^ZV-[1-9]\d*$/

const config = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'scope-jira-key': ({ scope }) => [
          JIRA_KEY.test(scope ?? ''),
          'o escopo deve ser a chave do Jira, sem zero à esquerda (ex.: feat(ZV-12): descrição)',
        ],
      },
    },
  ],
  rules: {
    'scope-jira-key': [2, 'always'],
    // Descrições em português podem começar com sigla ou nome próprio (ex.: README, WhatsApp).
    'subject-case': [0],
  },
}

export default config
