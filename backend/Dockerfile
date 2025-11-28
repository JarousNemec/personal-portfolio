FROM node:22-alpine
# Copy client app
COPY ./backend/app /app

# Copy shared models so TypeScript can find them
COPY ./shared /shared

WORKDIR /app
RUN npm install

# datový adresář nebude kopírován do image!
RUN mkdir -p /app/data

# Set environment
ENV NODE_ENV=production
EXPOSE 80

# Start the server
CMD ["npm", "start"]

