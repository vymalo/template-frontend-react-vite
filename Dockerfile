FROM node:lts-alpine as base

LABEL maintainer="Stephane Segning <selastlambou@gmail.com>"
LABEL org.opencontainers.image.description="Medusa API for the Vymalo Project"

WORKDIR /app

RUN corepack enable && corepack prepare yarn@4 --activate
RUN echo 'nodeLinker: "node-modules"' > ./.yarnrc.yml
RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock ./

# Install dependencies only when needed
FROM base AS deps

RUN yarn install --immutable

FROM deps AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn codegen && yarn generate-pwa-assets && yarn build

# Use Nginx as the production server
FROM nginx:stable-alpine

LABEL maintainer="Stephane Segning <selastlambou@gmail.com>"
LABEL org.opencontainers.image.description="UI Frontend for the Vymalo Project"

# Copy the built React app to Nginx's web server directory
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/init-scripts/ /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/*

COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]