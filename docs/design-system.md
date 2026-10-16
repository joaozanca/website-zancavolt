# Design system

Fonte única dos tokens e componentes do site da ZancaVolt. Os valores ficam como variáveis CSS em `src/app/globals.css`: as cores base em `:root` e o mapeamento para classes do Tailwind em `@theme inline`.

**Regra:** componentes usam só tokens (ex.: `bg-primary`, `text-ink-soft`), nunca cores fixas (`bg-yellow-300`, `#25D366`). Cor nova entra primeiro aqui e no `globals.css`.

## Direção

Visual industrial e confiável: superfícies escuras (grafite/azul-marinho) contrastando com o amarelo de destaque, que remete à eletricidade e à sinalização de segurança.

## Tokens

### Cor

| Token | Valor | Uso |
|---|---|---|
| `background` / `foreground` | `#ffffff` / `#0f172a` | Fundo e texto principal das áreas claras |
| `card` | `#ffffff` | Fundo dos cartões |
| `primary` / `primary-foreground` | `#facc15` / `#0f172a` | Amarelo da marca: botões principais e destaques |
| `primary-light` | yellow-300 do Tailwind | Hover do botão amarelo e ícones decorativos |
| `primary-dark` | yellow-600 do Tailwind | Texto amarelo sobre fundo claro (rótulos de seção) |
| `primary-darker` | yellow-700 do Tailwind | Hover de links sobre fundo claro |
| `muted` / `muted-foreground` | `#f1f5f9` / `#475569` | Fundos neutros e texto secundário |
| `success` | green-700 do Tailwind | Mensagens de sucesso (formulário) |
| `border` / `input` / `ring` | `#e2e8f0` / `#cbd5e1` / `#facc15` | Bordas, campos e anel de foco |
| `ink` / `ink-foreground` | `#0f172a` / `#f8fafc` | Superfícies escuras (topo, faixas, rodapé) e seu texto |
| `ink-muted` | `#94a3b8` | Texto discreto sobre fundo escuro |
| `ink-soft` | slate-300 do Tailwind | Texto de apoio sobre fundo escuro |
| `ink-border` | `rgb(148 163 184 / 0.18)` | Bordas sobre fundo escuro |
| `ink-hover` | slate-800 do Tailwind | Hover de botões escuros |
| `ink-shadow` | slate-900 do Tailwind | Cor das sombras (usada com opacidade, ex.: `shadow-ink-shadow/10`) |
| `overlay` | branco | Realce de hover sobre fundo escuro (usado com opacidade, ex.: `bg-overlay/10`) |
| `whatsapp` / `whatsapp-foreground` | `#25d366` / branco | Botão flutuante do WhatsApp (cor oficial da marca) |

Cada token vira a variável `--color-<token>` em `globals.css`, e o Tailwind gera as classes a partir dela: `bg-<token>`, `text-<token>`, `border-<token>`, `shadow-<token>` etc. Um número depois da barra é a opacidade: `bg-overlay/10` = cor `overlay` a 10%.

Esta tabela lista **todos** os tokens de cor do projeto. Token sem uso é removido (não deixe "reservas").

Os tokens marcados como "do Tailwind" apontam para a paleta padrão do Tailwind 4, para manter exatamente as cores do layout original.

### Tipografia

- Títulos (`font-heading`): Montserrat 600/700/800
- Texto (`font-sans`): Inter
- Escala: padrão do Tailwind (`text-xs` a `text-6xl`)

### Raio de borda

Base `--radius: 0.625rem` (10px). Variações usadas: `rounded-md` (0,8×), `rounded-lg` (1×), `rounded-xl` (1,4×) e `rounded-2xl` (1,8×).

### Espaçamento

Escala padrão do Tailwind (múltiplos de 4px: `--spacing: 0.25rem`).

### Breakpoints

Padrão do Tailwind: `sm` 40rem (640px) · `md` 48rem (768px) · `lg` 64rem (1024px) · `xl` 80rem (1280px).

## Componentes

| Componente | Arquivo | Variantes |
|---|---|---|
| `ActionLink` | `src/components/ui/action-link.tsx` | `primary`, `dark`, `outline`, `outline-light`; tamanhos `sm`, `md`, `lg` |
| `SectionHeading` | `src/components/ui/section-heading.tsx` | claro e escuro (`dark`) |
| Ícones de marca | `src/components/ui/brand-icons.tsx` | WhatsApp, Instagram, Facebook, LinkedIn |
| `Logo` | `src/components/layout/logo.tsx` | — |
| `WhatsAppFloat` | `src/components/layout/whatsapp-float.tsx` | — |

## Decisões

| Data | Decisão | Motivo |
|---|---|---|
| 2026-10-16 | Cores fixas dos componentes viraram tokens com os mesmos valores (ZV-2) | Trocar uma cor em um só lugar, sem mudar o visual atual |
| 2026-10-16 | Removidos o Button do shadcn e as animações do tw-animate-css (ZV-2) | Não eram usados por nenhuma tela |
| 2026-10-16 | Removidos os tokens sem uso popover, secondary, accent, destructive, card-foreground e os raios sm/3xl/4xl (ZV-2, reteste) | Achado do QA: sobras do shadcn que nenhum componente usava |
