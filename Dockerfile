FROM nginx:1.17.1-alpine

EXPOSE 8082

COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/portafolio-angular /usr/share/nginx/html