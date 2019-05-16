FROM node:12.2.0-stretch

RUN mkdir /usr/src/app/
WORKDIR /usr/src/app/

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg |  apt-key add - && apt update && apt install -y yarn git 
RUN git clone https://github.com/harpalassi/personal-portfolio.git .
