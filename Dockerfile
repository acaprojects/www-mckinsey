FROM nginx:alpine
RUN apk update && apk --no-cache --quiet upgrade
COPY ./ /usr/share/nginx/html/
