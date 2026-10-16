import { fileURLToPath } from 'node:url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera o site como HTML/CSS/JS estáticos na pasta out/, publicável em qualquer hospedagem.
  output: 'export',
  images: {
    // Exportação estática não tem servidor para otimizar imagens sob demanda.
    unoptimized: true,
  },
  turbopack: {
    // Fixa a raiz do projeto para o build não depender de package.json em pastas acima deste repositório.
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
}

export default nextConfig
