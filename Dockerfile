FROM node:12-alpine

ADD . ./build
WORKDIR /build

ENV AWS_REGION eu-central-1
ARG ENVIRONMENT=local
RUN npm ci && npm run build

EXPOSE 3000
CMD npm run server
