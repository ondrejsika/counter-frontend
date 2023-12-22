FROM node:16-slim
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD [ "yarn", "start" ]
EXPOSE 3000