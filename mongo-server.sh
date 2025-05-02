#!/bin/bash

MONGO_DIR=/Users/nathanmichael/Desktop/wwws/wwws/mongodb-macos-x86_64-4.4.29/bin
DB_PATH=/Users/nathanmichael/Desktop/wwws/wwws/mongodb-macos-x86_64-4.4.29/mydb
PORT=27017

if [ "$1" == "stop" ]; then
  echo "Stopping MongoDB..."
  pkill -f "mongod.*$DB_PATH"
  echo "MongoDB stopped."
else
  echo "Starting MongoDB..."
  mkdir -p "$DB_PATH"
  $MONGO_DIR/mongod --dbpath "$DB_PATH" --bind_ip 127.0.0.1 --port $PORT
fi