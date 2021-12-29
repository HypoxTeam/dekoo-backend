#!/bin/bash

BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../ || return

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# TypeScript code generation
if [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
  echo "Running script as Windows system"
  protoc \
      --plugin=protoc-gen-ts.cmd=./node_modules/.bin/protoc-gen-ts \
      --ts_out=${PROTO_DEST} \
      -I ./proto \
      proto/*.proto
else
  protoc \
      --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
      --ts_out=${PROTO_DEST} \
      --experimental_allow_proto3_optional \
      -I ./proto \
      proto/*.proto
fi