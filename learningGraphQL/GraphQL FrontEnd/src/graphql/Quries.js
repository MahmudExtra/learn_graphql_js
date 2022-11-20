import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query {
    products {
      id
      name
      image
      description
      quantity
      onSale
      category {
        name
      }
      reviews {
        comment
        rating
        title
      }
    }
  }
`;
export const LOAD_PRODUCT = gql`
  query ($productId: ID!) {
    product(id: $productId) {
      name
      image
      description
      quantity
      category {
        name
      }
    }
  }
`;
export const LOAD_CATEGORIES = gql`
  query {
    categories {
      id
      name
      products {
        name
      }
    }
  }
`;
export const LOAD_CATEGORY = gql`
  query ($categoryId: ID!) {
    category(id: $categoryId) {
      name
      id
      products {
        name
      }
    }
  }
`;
