FROM oven/bun AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile

FROM base AS build
COPY --from=install /temp/prod/node_modules node_modules
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 3000:80

CMD ["nginx", "-g", "daemon off;"]