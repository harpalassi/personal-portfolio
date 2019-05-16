#! /usr/bin/env bash
git pull
yarn build
yarn global add serve
serve -s build
