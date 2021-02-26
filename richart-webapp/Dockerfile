FROM node as builder

WORKDIR /opt/web

COPY package.json .

RUN npm install

COPY . ./
RUN npm run-script build


FROM nginx

EXPOSE 8080

COPY nginx.config /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
COPY --from=builder /opt/web/build /usr/share/nginx/html