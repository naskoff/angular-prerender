FROM node:16-alpine as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:stable-alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/* /usr/share/nginx/html
