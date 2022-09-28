FROM nginx

WORKDIR /usr/share/nginx/html/
COPY js ./js
COPY src ./src
COPY styles ./styles
COPY index.html ./
