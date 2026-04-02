FROM node:20-alpine

WORKDIR /app

# Copy only server files
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/
COPY src ./src/

# Install dependencies
RUN npm ci

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 3001

# Run migrations and start
CMD npx prisma migrate deploy && npm start
