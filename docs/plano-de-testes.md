# Plano de Testes — Site da ZancaVolt

Versão 1.0 · 30/10/2026 · Card ZV-25

Este plano descreve como o site da ZancaVolt é testado: o que entra no teste, onde, com quais ferramentas e quando uma entrega pode ser considerada pronta. Ele registra o que o time já faz desde a Sprint 0, com exemplos reais do projeto.

## 1. Escopo

**Testado:**

- O site institucional (página única): topo, faixa de diferenciais, Serviços, Sobre, Como trabalhamos, Projetos, faixa de chamada, Contato e rodapé.
- O formulário de orçamento e todos os links de contato (WhatsApp, telefone e e-mail).
- Aparência em celular, tablet e desktop.
- Acessibilidade básica (WCAG 2.2 nível AA): contraste, foco no teclado e ordem dos títulos.
- A esteira do repositório: proteção da `main`, checks do Pull Request, Dependabot e preview da Netlify.

**Fora do escopo (por enquanto):**

- Testes de performance e de carga.
- Testes de segurança além do que a esteira já faz (busca de segredos, vulnerabilidades e SonarCloud).
- Navegadores além do Chrome/Brave (Chromium) e do Safari do iPhone.
- O WhatsApp em si: o teste confere o link e a mensagem que o site monta, não o funcionamento do aplicativo.

## 2. Ambientes

| Ambiente | Endereço | Uso |
|---|---|---|
| **Local** | `http://localhost:3000` (`npm run build` e `npm start`) | Desenvolvimento, conferências rápidas do DEV e a `main` como referência na regressão visual |
| **Preview do PR** | `https://deploy-preview-N--website-zancavolt.netlify.app` | **Ambiente oficial de teste do QA.** Criado pela Netlify em todo Pull Request |
| **Produção** | `zancavolt.com.br` (ainda não publicado) | Verificação pós-publicação, quando o site for ao ar |

A regra é: **o QA testa no preview do PR, antes do merge.** O que vai para a `main` já foi testado.

## 3. Tipos de teste e ferramentas

| Tipo | O que confere | Ferramenta | Exemplo real |
|---|---|---|---|
| Funcional (manual) | O comportamento contra os critérios de aceite | Navegador + Zephyr Scale | Formulário de orçamento (ZV-15) |
| Teste negativo e validação de campos | Entradas que devem ser recusadas | Navegador | Campo só com espaços, e-mail "joao@" (ZV-15) |
| Regressão visual | O resto do site não mudou sem querer | Preview × `main`, lado a lado | ZV-T2, que achou a mudança de fonte na ZV-26 |
| Regressão de dependências | Atualizações de bibliotecas não mudam o site | Preview × `main` | ZV-T36 nos PRs do Dependabot (ZV-13) |
| Automação E2E | Fluxos de contato em todo PR | Playwright (`tests/e2e/`) | 4 testes: número do WhatsApp, dados antigos, mensagem com emoji e formulário vazio (ZV-24) |
| Acessibilidade | Contraste, foco no teclado e ordem dos títulos | Lighthouse, WebAIM Contrast Checker, tecla Tab | ZV-21 e ZV-26 |
| Responsividade | Layout em celular, tablet e desktop | DevTools (375 × 812, 768 × 1024 e tela cheia) | Todas as entregas visuais |
| Aparelho real | O que o simulador não mostra | iPhone | Ícone e atalho na tela inicial (ZV-17) |
| Ponta a ponta com serviço externo | O contato chega à empresa | Conta pessoal do WhatsApp, sem enviar a mensagem | ZV-14 |
| Análise estática e segurança | Qualidade do código, segredos e vulnerabilidades | ESLint, TypeScript, SonarCloud, gitleaks, npm audit | Checks automáticos do PR |

## 4. Automação

- Os testes ficam em `tests/e2e/` e rodam no check **"Testes E2E (Playwright)"** de todo Pull Request, **contra o preview** daquele PR.
- Rodar no computador: `npx playwright test` (o Playwright liga o site sozinho em `localhost:3000`).
- **Todo teste novo é visto falhando pelo menos uma vez** (trocando o valor esperado) antes de entrar no projeto. Teste que nunca falhou pode estar sempre verde sem testar nada.
- O QA define os cenários. O código pode ser escrito pelo QA ou pelo DEV/IA a pedido do QA, e isso fica registrado no commit e no PR.
- Bug corrigido que pode voltar ganha um teste automático. Exemplo: o emoji quebrado no WhatsApp (ZV-23) é conferido pelo teste 3.

## 5. Estratégia de regressão

Antes de cada entrega, a pergunta é: **"o que esta mudança pode ter quebrado?"**

| A entrega… | Regressão |
|---|---|
| Muda o que o visitante vê (cores, textos, layout) | **ZV-T2:** preview × `main` em desktop, 768 e 375, página inteira e menu ☰ |
| Atualiza bibliotecas (PR do Dependabot) | **ZV-T36:** preview × `main`, com atenção aos ícones e ao CSS |
| Mexe só em testes, documentação ou configuração | Sem regressão visual; os testes automáticos cobrem os fluxos de contato |

Em todos os casos, os **testes E2E** rodam sozinhos no PR.

Dicas que evitam falsos alarmes: a diferença que aparece igual nos dois lados não é regressão; um destaque num lado só costuma ser o mouse em cima (hover); confira o zoom do navegador (Ctrl + 0) e recarregue depois de mudar o tamanho no DevTools.

## 6. Critérios de entrada (quando um card vai para teste)

- O card tem **critérios de aceite** escritos no Jira (todo card nasce com critérios).
- O PR está aberto com a descrição completa e o checklist do DEV marcado.
- Os checks da CI estão **verdes** e o preview está no ar.
- O card está na coluna **Aguardando teste**.

## 7. Critérios de saída (quando o card pode ir para Feito)

- Todos os critérios de aceite testados no preview, com os casos e as execuções registrados no **Zephyr Scale**, no ciclo da sprint.
- Regressão feita quando a entrega pede (seção 5).
- Nenhum bug aberto que bloqueie o card; bugs menores podem ficar no backlog com decisão registrada.
- Aprovação do QA registrada como comentário no card.
- **Squash merge** com o título completo terminando em `(#N)`, e o card movido para **Feito**.

## 8. Fluxo de bugs

1. **Confirmar antes de registrar:** o problema se repete? Não é ambiente (zoom, cache, extensão, bloqueador do navegador)? Comparar com a `main` ou com a versão original mostra se ele já existia.
2. **Registrar no Jira:** resumo claro, ambiente, passos para reproduzir, resultado atual, resultado esperado, evidências e vínculo com o card ("bloqueia" ou "relacionado a").
3. **Prioridade** pelo impacto para o cliente: o formulário que não envia é crítico; um detalhe visual é baixo.
4. **Correção** pelo DEV, de preferência no mesmo PR quando o bug foi achado no teste daquela entrega.
5. **Reteste:** nova execução do mesmo caso no Zephyr ("Iniciar novo teste"). A execução com falha fica no histórico.
6. Defeito pequeno achado no teste da própria entrega pode ser corrigido no mesmo PR sem abrir bug, **por decisão do QA**, desde que fique registrado na execução (exemplo: a fonte da faixa de diferenciais na ZV-26).

## 9. Evidências

- Cada passo executado tem um print que prova o resultado, anexado no passo do Zephyr.
- A evidência mostra **a entrada e a saída** (por exemplo, o formulário preenchido e a mensagem que chegou).
- **Sem dados pessoais:** nada de conversas, contatos ou dados reais de terceiros nos prints; usar dados fictícios ("João Silva", "(41) 99999-9999") e recortar quando necessário (LGPD).
- Quando o print não mostra tudo, o resultado real descreve o que foi visto e por quê.
- Quem executou fica registrado no comentário da execução.

## 10. Ferramentas

| Ferramenta | Uso |
|---|---|
| Jira | Sprints, cards, critérios de aceite e bugs |
| Zephyr Scale | Casos de teste, ciclos por sprint, execuções e rastreabilidade com os cards |
| GitHub | Branches, Pull Requests, revisão e proteção da `main` |
| GitHub Actions | CI: lint, tipos, formatação, build, gitleaks, links quebrados e E2E |
| SonarCloud | Qualidade e segurança do código |
| Netlify | Preview de cada Pull Request |
| Playwright | Testes E2E automatizados |
| DevTools, Lighthouse e WebAIM | Responsividade, acessibilidade e contraste |

## 11. Papéis

| Papel | Responsabilidade |
|---|---|
| **PO / dono do site** | Define o que entra, aprova decisões de produto e de visual |
| **QA** | Participa da Planning, define o que testar, executa, julga, registra e aprova ou reprova a entrega |
| **DEV** | Implementa, faz a conferência básica antes do PR e corrige os bugs |

A aprovação de uma entrega é sempre do QA. O DEV pode ajudar a executar testes a pedido do QA.

## 12. Riscos conhecidos

- Testes manuais dependem do tempo do QA; a automação E2E cobre só os fluxos de contato por enquanto.
- O preview da Netlify mostra uma barra própria ("Collaborate") que não existe no site real e pode cobrir conteúdo nos prints.
- O site ainda não está em produção: a verificação pós-publicação será definida na publicação.
