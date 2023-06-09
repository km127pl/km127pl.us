FROM node:19-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npx vite build

EXPOSE 8080

CMD [ "node", "app.js" ]