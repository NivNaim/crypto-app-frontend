FROM node:18.15.0

WORKDIR /app

COPY package.json .

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "prod"]