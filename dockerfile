# Base image for Node.js environment
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project code
COPY . .

# Switch to a slim runtime image for production
FROM node:18-alpine

# Copy only the production-ready application files
COPY --from=builder /app /app

# Install PM2 globally (optional)
RUN npm install -g pm2

EXPOSE ${PORT:-4000}

# Set the startup command to run PM2 with your server script
CMD ["pm2", "start", "npm", "--", "start"]