# # Created by Apiwat Tatsanakitti

# Base Image
FROM node:16.16.0-alpine3.16 as builder

# Working Directory (WORKDIR)
WORKDIR /usr/app

# Copy package.json 
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]

# Base Image
FROM nginx:alpine
EXPOSE 80
COPY --from=builder /usr/app/build /usr/share/nginx/html