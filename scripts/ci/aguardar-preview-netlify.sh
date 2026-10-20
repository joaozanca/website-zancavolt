#!/usr/bin/env bash
# Espera o preview da Netlify do commit ficar pronto e grava o endereço em BASE_URL (para o Playwright).
# Lê o "commit status" que a Netlify publica no GitHub (contexto netlify/<projeto>/deploy-preview).
# Uso: aguardar-preview-netlify.sh <sha-do-commit>   (precisa de GITHUB_TOKEN e GITHUB_REPOSITORY)
set -euo pipefail

sha="$1"
limite_segundos="${LIMITE_SEGUNDOS:-600}"
intervalo=15
decorrido=0

echo "Aguardando o preview da Netlify do commit $sha..."
while [ "$decorrido" -lt "$limite_segundos" ]; do
  status=$(curl -fsSL \
    -H "Authorization: Bearer $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$GITHUB_REPOSITORY/commits/$sha/status" |
    jq -c '[.statuses[] | select(.context | test("^netlify/.+/deploy-preview$"))][0] // empty')

  if [ -n "$status" ]; then
    estado=$(jq -r '.state' <<<"$status")
    url=$(jq -r '.target_url' <<<"$status")
    case "$estado" in
      success)
        echo "Preview pronto: $url"
        echo "BASE_URL=${url%/}" >>"$GITHUB_ENV"
        exit 0
        ;;
      failure | error)
        echo "::error::O deploy do preview na Netlify falhou ($estado): $url"
        exit 1
        ;;
    esac
    echo "Preview ainda em andamento ($estado)..."
  else
    echo "A Netlify ainda não publicou o status do preview..."
  fi

  sleep "$intervalo"
  decorrido=$((decorrido + intervalo))
done

echo "::error::O preview da Netlify não ficou pronto em ${limite_segundos}s."
exit 1
