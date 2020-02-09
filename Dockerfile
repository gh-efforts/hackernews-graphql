FROM node:lts-alpine
WORKDIR /node/hackernews-graphql
ENV NODE_ENV development
COPY . .
RUN yarn --frozen-lockfile
EXPOSE 12128
CMD ["yarn", "start"]
