import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'
import db from './firebase'

const typeDefs = './src/schema.graphql'

const options = {
  endpoint: '/graphql',
  playground: '/playground',
}

const server = new GraphQLServer({ typeDefs, resolvers, context: req => ({ ...req, db }) })
server.start(options, ({ port, playground }) =>
  console.log(`🚀 Server is running on http://localhost:${port}${playground}`)
)
