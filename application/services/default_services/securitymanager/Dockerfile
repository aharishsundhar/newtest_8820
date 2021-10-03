FROM node:14.11.0-alpine
COPY . /securitymanager
WORKDIR /securitymanager
RUN npm i -g ts-node
RUN npm install
CMD npm run prod
