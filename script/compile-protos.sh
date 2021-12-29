#!/bin/bash

BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../ || return

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# TypeScript code generation
protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DEST} \
    -I ./proto \
    proto/*.proto