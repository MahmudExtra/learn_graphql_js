const { ApolloServer } = require("apollo-server");
const { typeDef } = require("./schema");
const { Query } = require("./resolvers/query");
const { Mutation } = require("./resolvers/Mutation");
const { Categories } = require("./resolvers/categories");
const { Product } = require("./resolvers/products");
const { db } = require("./db");

const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: {
    Query,
    Mutation,
    Categories,
    Product,
  },
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log(`sever is running on ${url}`);
});
