FROM node:14.11.0-alpine
COPY . /proxymanager
WORKDIR /proxymanager
RUN npm i -g ts-node
RUN npm install
CMD npm run prod