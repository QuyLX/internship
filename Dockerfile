# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12.16.1

# A directory within the virualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /app

# Copies package.json and packages-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install 

# Copies everything
COPY . .


CMD ["npm", "run", "dev"]
