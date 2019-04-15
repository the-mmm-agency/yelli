# Stage 1
FROM node:11.10.0-alpine as react-build

VOLUME [ "/root/npm" ]
WORKDIR /app
COPY . ./
RUN npm ci
ENV NODE_ENV production
RUN npm run build

# Stage 2 - the production environment
FROM node:11.10.0-alpine
COPY --from=react-build /app/build /src
RUN npm i -g serve
EXPOSE 8080
CMD ["serve", '-l', "tcp://0.0.0.0:8080", "-s", "src"]