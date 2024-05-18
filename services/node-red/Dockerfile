# Use the official Node.js 18 image as the base image
FROM node:18
# Install Node-RED and create .node-red folder at root
RUN npm install -g --unsafe-perm node-red

# Set the working directory in the container
# WORKDIR /usr/src/node-red
WORKDIR /root/.node-red

# Copy package.json and flows.json from Windows user directory to the working directory in the container
COPY ./services/node-red/*.json ./

# Install Node-RED palette dependencies
RUN npm install

# Exposes ports: 1433 1880 5100 5200 5300

# Start Node-RED
CMD ["node-red"]