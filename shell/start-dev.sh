#!/bin/sh
export NODE_ENV=development
export PORT=5501
node_modules/db-migrate/bin/db-migrate up -e $NODE_ENV && nodemon