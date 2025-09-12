# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if any)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose the port your dev server runs on (commonly 3000 or 5173 or 8080)
EXPOSE 3002

# Start the development server
CMD ["npm", "run", "dev"]
