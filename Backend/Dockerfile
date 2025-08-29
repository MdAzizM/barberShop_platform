# Use an official Node.js runtime as the base image.
# We use a lightweight version for a smaller image size.
FROM node:24.5.0-alpine

# Set the working directory inside the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory.
# We do this first to leverage Docker's caching.
COPY package*.json ./

# Install application dependencies.
RUN npm install

# Copy the rest of the application source code.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5000

# Define the command to run your application.
# This will start your Node.js server.
CMD [ "npm", "start" ]