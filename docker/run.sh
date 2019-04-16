#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker rm -f test

docker run --network host \
--name test \
-v ${DIR}/../.:/src \
-u $(id -u) \
test \
 /bin/bash -c "npm run dev"