# Stage 1
FROM node:11.10.0-alpine as react-build

VOLUME [ "/root/npm" ]
WORKDIR /app
COPY . ./
RUN npm ci
ENV NODE_ENV production
RUN npm run build

FROM node:11.10.0-alpine
COPY --from=react-build /app/build ./build
CMD ["npx", "serve", '-l', "tcp://0.0.0.0:8080", '-s', "build"]