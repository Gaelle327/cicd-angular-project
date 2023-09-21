# Stage 1: Build Angular Application
FROM node:latest as node
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Expose the port your app will run on
EXPOSE 4200

# Start the Angular app
CMD ["ng", "serve","-o"]
