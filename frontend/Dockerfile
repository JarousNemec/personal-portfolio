FROM node:22-alpine AS base

# Copy client app
COPY ./frontend/client-app /client-app

# Copy shared models so TypeScript can find them
COPY ./shared /shared

WORKDIR /client-app
RUN npm install
# Set environment
ENV NODE_ENV=production
RUN npm run build

# 2️⃣ Serve stage (NGINX)
FROM nginx:stable-alpine

# Smaž defaultní nginx stránky a zkopíruj náš build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=base /client-app/dist /usr/share/nginx/html

# Exponuj port 80
EXPOSE 80

# Spusť nginx
CMD ["nginx", "-g", "daemon off;"]


