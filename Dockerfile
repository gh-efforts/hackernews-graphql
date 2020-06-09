FROM node:lts-alpine
WORKDIR /node/hackernews-graphql
COPY . .
RUN yarn --frozen-lockfile
RUN yarn build
EXPOSE 12128
CMD ["yarn", "start"]
