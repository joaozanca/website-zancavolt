# Portfólio

Site de portfólio — em construção.

## Status

- [x] Estrutura inicial de pastas
- [ ] Stack definida
- [ ] Design system (`docs/design-system.md`)
- [ ] Páginas: home, projetos, sobre, contato
- [ ] Testes (e2e, acessibilidade e regressão visual)
- [ ] Deploy

## Estrutura

```
docs/             Documentação do projeto (design system)
prototypes/       Protótipos HTML de arquivo único (não fazem parte do build)
public/           Arquivos servidos como estão (favicon, robots.txt, imagens estáticas)
src/
  assets/         Imagens e fontes processadas pelo build
  components/     Componentes reutilizáveis
  content/        Conteúdo (ex.: projetos/ em Markdown)
  layouts/        Layouts de página (head, SEO, header/footer)
  pages/          Rotas
  styles/         Tokens (variáveis CSS) e estilos globais
tests/
  e2e/            Testes ponta a ponta
  a11y/           Testes automatizados de acessibilidade
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha os valores. O `.env` não é versionado.

## Como rodar

_A definir após a escolha da stack._
