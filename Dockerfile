# Pull in the official lightweight version of Node 12.
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /app

COPY package.json .
COPY yarn.lock .

# Install production dependencies.
RUN yarn install

# Copy local codebase into the container image
COPY . .

# Compile down to ES5 with Babel
RUN yarn build

# Remove unused src directory
RUN rm -rf src/

# Start the api server
CMD [ "yarn", "start" ]