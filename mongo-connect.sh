#!/bin/bash

MONGO_DIR=/Users/nathanmichael/Desktop/wwws/wwws/mongodb-macos-x86_64-4.4.29/bin
PORT=27017

echo "Connecting to MongoDB on port $PORT..."
$MONGO_DIR/mongo --port $PORT