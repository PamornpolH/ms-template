FROM node:18-alpine as base

ADD ./ /opt/app
WORKDIR /opt/app

USER root

RUN rm -rf node_modules \
 && chown -R node /opt/app

USER node


FROM base as release

USER root
RUN npm install --only=production \
 && chown -R node /opt/app

USER node
ENV HOME_DIR=/opt/app \
    NODE_ENV=production \
    PORT=5501

ENTRYPOINT node -r ts-node/register/transpile-only -r tsconfig-paths/register ./dist/src/server.js


FROM base as build

USER root
RUN npm install -g nodemon \
 && npm install \
 && chown -R node /opt/app

USER node

ENTRYPOINT ts-node -r tsconfig-paths/register ./src/server.ts