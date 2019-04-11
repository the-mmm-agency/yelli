# Stage 1
FROM znck/docker-pnpm:10.5-alpine as react-build

VOLUME [ "/root/npm" ]
RUN npm config set store /root/npm/.pnpm-store
WORKDIR /app
COPY . ./
RUN pnpm i
ENV NODE_ENV production
RUN pnpm run build

# Stage 2 - the production environment
FROM pagespeed/nginx-pagespeed
COPY --from=react-build /app/build /usr/share/nginx/html
COPY ./nginx /etc/nginx
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]