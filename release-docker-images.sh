#!/bin/bash

set -e # exit on error
set -x # echo commands

RELEASE_TAG=${RELEASE_TAG:-latest}

docker build \
	-t nlxio/design-system:latest -t nlxio/design-system:${RELEASE_TAG} \
        .

# TODO: only push the image when this script is ran in CI/CD or forced using env var (backup-plan for when CI/CD is down/unavailable)
docker push nlxio/design-system:latest
docker push nlxio/design-system:${RELEASE_TAG}
