FROM node:12.9.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80
CMD ["npm", "start"]