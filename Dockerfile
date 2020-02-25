# Docker Official Images - https://hub.docker.com/_/node/ 
FROM node:lts-stretch-slim

COPY . /src

WORKDIR /src

ADD webpack-dev.config.js webpack.config.js
RUN rm webpack-dev.config.js

RUN npm install 

EXPOSE 8080 

CMD ["npm", "start"]