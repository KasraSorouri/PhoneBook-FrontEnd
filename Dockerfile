FROM node:latest as build-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:latest
COPY --from=build-stage /usr/src/app/build/ /usr/share/nginx/html
COPY phones-nginx.conf /etc/nginx/conf.d/default.conf
