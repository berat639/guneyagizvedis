# 1. Bağımlılıklar ve Build aşaması (Debian glibc tabanlı node:22-slim — Tailwind v4 / SWC native binary uyumlu)
FROM node:22-slim AS builder
WORKDIR /app

COPY package.json ./
RUN npm install --include=optional --no-audit --no-fund

COPY . .

ARG NEXT_PUBLIC_SITE_URL="https://www.guneyagizvedis.com"
ARG NEXT_PUBLIC_ASSISTANT_URL="https://mrys.guneyagizvedis.com"
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY="6Ld9wQwuAAAAAPnIbwYCbHwjF1JEzTK-m70-b98W"

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_ASSISTANT_URL=$NEXT_PUBLIC_ASSISTANT_URL
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# 2. Çalıştırma (Production Standalone) aşaması
FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Varsayılan çalışma zamanı (Runtime) ortam değişkenleri — Dokploy Environment sekmesinden ezilebilir
ENV NEXT_PUBLIC_SITE_URL="https://www.guneyagizvedis.com"
ENV NEXT_PUBLIC_ASSISTANT_URL="https://mrys.guneyagizvedis.com"
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY="6Ld9wQwuAAAAAPnIbwYCbHwjF1JEzTK-m70-b98W"
ENV RECAPTCHA_SECRET_KEY="6Ld9wQwuAAAAAGRRkNjnLd8-Kcx1WYrrgSvRqL0q"
ENV CONTACT_RECEIVER_EMAIL="incecamberat@gmail.com"
ENV SMTP_HOST="mail.kurumsaleposta.com"
ENV SMTP_PORT="465"
ENV SMTP_SECURE="true"
ENV SMTP_USER="info@guneyagizvedis.com"
ENV SMTP_FROM="info@guneyagizvedis.com"
ENV SMTP_FROM_NAME="Güney Ağız ve Diş Sağlığı"

RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
