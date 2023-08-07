# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all project files to the container's working directory
COPY . .

# Install Husky
RUN npm install husky --save-dev

# Set up Husky Git hooks
RUN npx husky install

# Configure Husky hooks (replace "pre-commit" with any other hook you want)
RUN npx husky add .husky/pre-commit "npm test"

# Expose the port that the Angular app will run on
EXPOSE 4200

# Start the Angular app
CMD ["npm", "start"]
