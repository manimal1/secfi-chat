import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    User(order_by: { last_name: desc }) {
      uuid
      email
      first_name
      last_name
      created_at
    }
  }
`;
