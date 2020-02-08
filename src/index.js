import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'
import db from './firebase'

const typeDefs = './src/schema.graphql'

const options = {
  port: '12128',
  endpoint: '/graphql',
  playground: '/graphql',
}

const server = new GraphQLServer({ typeDefs, resolvers, context: req => ({ ...req, db }) })
server.start(options, ({ port, playground }) =>
  console.log(`🚀 Server is running on http://localhost:${port}${playground}`)
)
