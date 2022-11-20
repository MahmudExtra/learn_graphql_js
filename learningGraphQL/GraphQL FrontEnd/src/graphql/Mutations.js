import { gql } from "@apollo/client";
export const DELETE_CATEGORY = gql`
  mutation ($deleteCategoryId: ID!) {
    deleteCategory(id: $deleteCategoryId)
  }
`;
export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($updateCategoryId: ID!, $input: updateCategory!) {
    updateCategory(id: $updateCategoryId, input: $input) {
      name
    }
  }
`;
