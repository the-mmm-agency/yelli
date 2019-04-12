# Stage 1
FROM node:11.10.0-alpine as react-build

VOLUME [ "/root/npm" ]
WORKDIR /app
COPY . ./
RUN npm ci
ENV NODE_ENV production
RUN npm run build

# Stage 2 - the production environment
FROM pagespeed/nginx-pagespeed
COPY --from=react-build /app/build /usr/share/nginx/html
COPY ./nginx /etc/nginx
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]