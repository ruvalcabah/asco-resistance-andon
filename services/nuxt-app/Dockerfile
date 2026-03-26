# syntax = docker/dockerfile:1

# -----------------------
# Build stage
# -----------------------
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-slim as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm prune --production

# -----------------------
# Production stage
# -----------------------
FROM node:${NODE_VERSION}-slim

ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /app

# Copia TODO .output (incluye public y server)
COPY --from=build /app/.output/ ./

# Inicia el servidor Nuxt
CMD ["node", "server/index.mjs"]
# ####################################
# # syntax = docker/dockerfile:1
# ARG NODE_VERSION=18.14.2

# FROM node:${NODE_VERSION}-slim as base

# ARG PORT=3000

# ENV NODE_ENV=production

# WORKDIR /src

# # Build
# FROM base as build

# COPY --link package.json package-lock.json ./
# # remove ^ /
# RUN npm install --production=false

# COPY --link . .

# RUN npm run build
# RUN npm prune

# # Run
# FROM base

# ENV PORT=$PORT

# COPY --from=build /src/.output /src/.output
# # Optional, only needed if you rely on unbundled dependencies
# # COPY --from=build /src/node_modules /src/node_modules

# CMD [ "node", ".output/server/index.mjs" ]