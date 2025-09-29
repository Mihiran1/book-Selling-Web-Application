# Stage 1: Build Stage (React Application එක Build කිරීම)
FROM node:18-alpine AS build

# Working Directory එක සකස් කිරීම
WORKDIR /app

# Dependencies install කිරීම
COPY package.json ./
RUN npm install

# Source code copy කර build කිරීම
COPY . .
RUN npm run build

# Stage 2: Production Stage (Static Files Serve කිරීමට NGINX භාවිතය)
FROM nginx:alpine

# Build Stage එකේදී සෑදූ Static Files NGINX folder එකට copy කිරීම
COPY --from=build /app/build /usr/share/nginx/html

# Port 80 Expose කිරීම
EXPOSE 80

# NGINX Server එක Start කිරීම
CMD ["nginx", "-g", "daemon off;"]