# Use Node.js alpine image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run in dev mode and allow access from outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
