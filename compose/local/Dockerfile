FROM node:12.2.0-stretch

RUN mkdir /usr/src/app/
WORKDIR /usr/src/app/

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg |  apt-key add - && apt update && apt install -y yarn

COPY yarn.lock /usr/src/app/yarn.lock
COPY package.json /usr/src/app/package.json
