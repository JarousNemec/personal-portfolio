FROM node:22-alpine
COPY . .
WORKDIR /app
RUN npm install
# Set environment
ENV NODE_ENV=production
EXPOSE 80

# Start the server
CMD ["npm", "start"]

