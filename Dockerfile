FROM node:18.17-alpine3.17

WORKDIR /app

COPY . /app

FROM base as build

RUN yarn install

RUN yarn run prebuild
RUN yarn run build

FROM base as release
WORKDIR /build

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json .
COPY --from=build /app/tsconfig.build.json .

RUN chown -R node:node /build

USER node

EXPOSE $PORT

CMD ["npm", "run", "start"]
