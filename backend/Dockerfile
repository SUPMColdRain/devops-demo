# pull a basic image from docker
FROM node:alpine as builder
# create a folder in the image
WORKDIR '/usr/src/app'
# nodejs and npm had installed
# install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN apk add --no-cache --update nodejs nodejs-npm
COPY package.json package-lock.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# second stage
FROM node:alpine
WORKDIR '/usr/src/app'
RUN apk add --no-cache --update nodejs nodejs-npm
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 8080
CMD [ "node", "src/server.js" ]
