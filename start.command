#!/bin/bash

CPATH="${BASH_SOURCE%/*}"

cd "$CPATH/backend"
npm start &

cd "$CPATH/frontend"
npm start &

mongod --port 27017 --dbpath "$CPATH/backend/db"