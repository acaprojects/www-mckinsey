FROM nginx:alpine
# Switch to newer repo for security updates
RUN sed -i 's/3.18/3.19/g' /etc/apk/repositories && apk update && apk --no-cache --quiet upgrade
COPY ./ /usr/share/nginx/html/
