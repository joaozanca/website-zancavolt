# ZancaVolt — Site institucional

Site da **ZancaVolt**, empresa de serviços elétricos, segurança eletrônica e ar comprimido que atende **São José dos Pinhais, Curitiba e Região Metropolitana (PR)**.

> Projeto em construção, desenvolvido em sprints com processo completo de QA.

## Tecnologias

- [Next.js](https://nextjs.org/) 16 com exportação estática (o build gera HTML puro na pasta `out/`)
- React 19, TypeScript e [Tailwind CSS](https://tailwindcss.com/) 4

## Como rodar no seu computador

Pré-requisito: [Node.js](https://nodejs.org/) 20.9 ou superior.

```bash
npm install        # instala as dependências (só na primeira vez)
npm run dev        # abre o site em modo desenvolvimento: http://localhost:3000
```

Para ver exatamente a versão que vai para o ar:

```bash
npm run build      # gera o site estático em out/
npm start          # serve a pasta out/ em http://localhost:3000
```

## Qualidade de código

```bash
npm run lint           # ESLint (regras do Next.js); reprova erros e avisos
npm run typecheck      # checagem de tipos do TypeScript
npm run format:check   # confere a formatação (Prettier)
npm run format         # corrige a formatação automaticamente
```

O `npm run build` também reprova erros de TypeScript.

### Padrão de commit

Os commits seguem [Conventional Commits](https://www.conventionalcommits.org/pt-br/) em português, com a chave do Jira como escopo:

```
tipo(ZV-n): descrição
```

Exemplos: `feat(ZV-13): envia o formulário para o WhatsApp`, `fix(ZV-12): corrige a tag original`. Tipos mais usados: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`.

O Husky (instalado pelo `npm install`) roda o commitlint a cada commit e bloqueia mensagens fora do padrão.

## Estrutura

```
src/
  app/               Página, layout (metadados/SEO) e estilos globais
  components/
    layout/          Header, footer, logo e botão flutuante do WhatsApp
    sections/        Seções da página (hero, serviços, projetos, contato…)
    ui/              Componentes visuais reutilizáveis (botões, títulos, ícones)
  config/site.ts     Dados da empresa: telefone, WhatsApp, e-mail, região, serviços
  lib/               Funções utilitárias
public/              Imagens, ícones e arquivos servidos como estão
tests/               Testes automatizados (E2E e acessibilidade)
docs/                Documentação do projeto e de QA
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha os valores. O `.env` não é versionado.

## Histórico

A tag `v0.0.0-original` guarda o layout exatamente como foi exportado do v0, usada como referência de fidelidade visual.
