#! /usr/bin/env bash
git pull
yarn install
yarn build
yarn global add serve
serve -s build
