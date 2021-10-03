FROM node:14.11.0-alpine
COPY . /camundamanager
WORKDIR /camundamanager
RUN npm i -g ts-node
RUN npm install
CMD npm run prod
