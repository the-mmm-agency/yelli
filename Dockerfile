# Stage 1
FROM node:11.10.0-alpine as react-build

WORKDIR /app
COPY . ./
ENV NODE_ENV production
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]