const { ApolloServer, gql } = require("apollo-server");
const { users, quotes } = require("./fakedb");
const { resolvers } = require("./resolvers/GraphQLResolvers");
const { typeDefs } = require("./schema/GraphQLSchema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
