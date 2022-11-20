const { gql } = require("apollo-server");

exports.typeDef = gql`
  type Query {
    products(filter: ProductFilterInput): [Product!]!
    product(id: ID!): Product!
    categories: [Categories]!
    category(id: ID!): Categories
  }

  type Mutation {
    addCategory(input: addCategoryInput!): Categories!
    addProduct(input: addProductInput!): Product!
    deleteCategory(id: ID!): Boolean!
    updateCategory(id: ID!, input: updateCategory!): Categories!
  }

  type Product {
    name: String!
    price: Float!
    description: String!
    quantity: Int!
    onSale: Boolean!
    image: String!
    id: ID!
    category: Categories
    reviews: [Reviews!]!
  }
  type Categories {
    name: String!
    id: ID!
    products(filter: ProductFilterInput): [Product!]!
  }
  type Reviews {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input ProductFilterInput {
    onSale: Boolean
  }
  input addCategoryInput {
    name: String!
  }
  input updateCategory {
    name: String!
  }
  input addProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Int!
    image: String!
    onSale: Boolean
    categoryId: String!
  }
`;
