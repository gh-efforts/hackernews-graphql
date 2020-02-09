FROM node:lts-alpine
ENV NODE_ENV production
WORKDIR /node/hackernews-graphql
COPY . .
RUN yarn --frozen-lockfile
RUN yarn build
EXPOSE 12128
CMD ["yarn", "start"]
