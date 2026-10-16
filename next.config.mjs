/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera o site como HTML/CSS/JS estáticos na pasta out/, publicável em qualquer hospedagem.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Exportação estática não tem servidor para otimizar imagens sob demanda.
    unoptimized: true,
  },
}

export default nextConfig
