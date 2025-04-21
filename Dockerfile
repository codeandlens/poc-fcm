# Step 1: Build app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/public/firebase-messaging-sw.js /usr/share/nginx/html/firebase-messaging-sw.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
