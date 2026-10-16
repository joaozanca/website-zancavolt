import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Desliga regras de estilo que conflitam com o Prettier (a formatação é dele).
  prettier,
  globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts']),
])
