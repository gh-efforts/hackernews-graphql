FROM node:lts-alpine
WORKDIR /node/hackernews-graphql
COPY . .
RUN yarn --frozen-lockfile --production=false
EXPOSE 12128
CMD ["yarn", "start"]
