FROM node:14.11.0-alpine
COPY . /adminmanager
WORKDIR /adminmanager
RUN npm i -g ts-node
RUN npm install
CMD npm run prod
