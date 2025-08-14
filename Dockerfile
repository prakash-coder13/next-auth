# Builder stage
FROM node:24-alpine3.21 AS builder
WORKDIR /app

COPY package*.json ./
# Install only production dependencies and clear npm cache
RUN npm ci --omit=dev && npm cache clean --force

COPY . .
RUN npm run build

# Runner stage
FROM node:24-alpine3.21 AS runner
WORKDIR /app

RUN addgroup -g 1001 nodejs \
 && adduser -S nextjs -u 1001 -G nodejs

ENV NODE_ENV=production

# Copy only what is needed from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
