const { gql } = require("apollo-server");

// The GraphQL schema
exports.typeDefs = gql`
  type Query {
    users: [User!]!
    quotes: [Quote!]!
    user(id: ID!): User!
    quote(id: ID!): [Quote!]!
  }
  type Mutation {
    createUser(input: createUserInput): User!
    deleteUser(id: ID!): Boolean!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    quotes: [Quote]!
  }
  type Quote {
    name: String!
    by: String!
  }
  input createUserInput {
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }
`;
