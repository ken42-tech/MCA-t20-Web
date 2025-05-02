# ---------- Stage 1: Build the Next.js app ----------
    FROM node:18-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy config and source files
    COPY next.config.mjs tailwind.config.js postcss.config.mjs ./
    COPY jsconfig.json ./
    COPY public ./public
    COPY src ./src

   
    # Build the app
    RUN npm run build
    
    
    # ---------- Stage 2: Serve the built app ----------
    FROM node:18-alpine AS runner
    
    WORKDIR /app
    
    
    ENV NODE_ENV=production
    
    # Copy only the build output and necessary files
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./
    
    # Expose the port the app runs on
    EXPOSE 3000
    
    # Run the app
    CMD ["npm", "start"]
    
