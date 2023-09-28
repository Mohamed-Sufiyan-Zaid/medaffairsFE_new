FROM node:18.16-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . ./
RUN npm run build

FROM nginx:1.21.5-alpine as release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
