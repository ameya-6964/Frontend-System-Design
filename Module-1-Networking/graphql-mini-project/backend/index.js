import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    hello: String
  }

  type Mutation {
    setMessage(message: String!): String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Namaste Frontend System Design!",
  },
  Mutation: {
    setMessage: (_, { message }) => {
      return `Message received: ${message}`;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
