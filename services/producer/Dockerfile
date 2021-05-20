FROM node:12-alpine

WORKDIR /app
COPY package*.json ./
COPY src/ ./src

RUN npm install && \
    npm cache clean --force

ENTRYPOINT npm start
