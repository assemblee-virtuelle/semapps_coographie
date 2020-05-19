FROM node:12.16-alpine

WORKDIR /app

RUN apk add --update --no-cache git bash yarn nano

COPY ./package.json /app/package.json

RUN npm install

COPY . /app/

CMD npm start
