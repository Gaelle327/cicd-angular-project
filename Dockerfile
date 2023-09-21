# Stage 1: Build Angular Application
FROM node:latest as node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

# Build the Angular application
RUN ng build

# Stage 2: Serve Angular Application using ng serve
FROM node:latest

WORKDIR /app

# Copy the built Angular app from the previous stage
COPY --from=node /app/dist /app/dist

# Expose the default port used by ng serve (4200)
EXPOSE 4200

# Start ng serve to serve the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0"]
