FROM node:18.17.0-alpine

WORKDIR /usr/app/

COPY package.json .
COPY yarn.lock .
COPY prisma ./prisma/


RUN npm install -g @nestjs/cli
RUN yarn install

COPY . .

EXPOSE 3000
