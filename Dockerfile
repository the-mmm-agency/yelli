# Stage 1
FROM node:11.10.0-alpine as react-build

WORKDIR /app
COPY . ./
RUN yarn
ENV NODE_ENV production
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]