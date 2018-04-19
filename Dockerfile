FROM node:alpine AS build

# Install required build tools
RUN apk add --no-cache \
    build-base \
    python

# Copy only package.json en yarn.lock to make the dependency fetching step optional.
COPY package.json \
     yarn.lock \
     /app/

WORKDIR /app
RUN yarn install

# Now copy the whole directory for the build step.
COPY . /app/
RUN yarn run build

# Copy static docs to alpine-based nginx container.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
