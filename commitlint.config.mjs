// Padrão de commit do projeto: tipo(escopo): descrição. O escopo é a chave do Jira (feat(ZV-13): …), usada
// até a Sprint 5, ou, depois do encerramento do Jira, um assunto curto em minúsculas (feat(seo): …).
const JIRA_KEY = /^ZV-[1-9]\d*$/
const ASSUNTO = /^[a-z][a-z0-9-]*$/

const config = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'scope-jira-key': ({ scope }) => [
          JIRA_KEY.test(scope ?? '') || ASSUNTO.test(scope ?? ''),
          'o escopo deve ser a chave do Jira (feat(ZV-12): …) ou um assunto curto em minúsculas (feat(seo): …)',
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
