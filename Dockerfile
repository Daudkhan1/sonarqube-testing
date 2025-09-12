# Start from official Node.js image
FROM node:14.04

# Set working directory
WORKDIR /app

# Copy dependency file and install dependencies
COPY package.json ./
RUN npm install --only=production

# Copy the rest of the code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
