FROM node:16.14-alpine As development

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:16.14-alpine as production
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/src/main"]