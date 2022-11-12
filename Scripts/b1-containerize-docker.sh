#!/bin/bash

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# Description: Script to dockerize the Services Configuration and push it to the docker registry
# Author: Robbie, and Swamy
# Date: 12-Nov-2022
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

TAG=latest
VERSION_TAG=$(git log -1 --pretty=format:%h)
echo "version tag: $VERSION_TAG"

REPOSITORY=vishipayyallore/eshop-services-configuration

docker login

docker build -f "./Dockerfile" -t $REPOSITORY:$TAG -t $REPOSITORY:$VERSION_TAG .

docker push $REPOSITORY:$TAG
docker push $REPOSITORY:$VERSION_TAG