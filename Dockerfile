FROM node:lts-alpine
WORKDIR /node/hackernews-graphql
COPY . .
RUN yarn --frozen-lockfile
EXPOSE 12128
CMD ["yarn", "start"]
