# 1. Bağımlılıklar aşaması
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# 2. Build aşaması
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
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

# 3. Çalıştırma (Production Standalone) aşaması
FROM node:22-alpine AS runner
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
ENV SMTP_PORT="587"
ENV SMTP_USER="info@guneyagizvedis.com"
ENV SMTP_FROM="Özel Güney Ağız ve Diş Sağlığı <info@guneyagizvedis.com>"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
