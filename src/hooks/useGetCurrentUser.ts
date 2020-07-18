import { gql, useQuery } from '@apollo/client';

import { getItem } from 'utils';

// TODO: set up user authentication
// currently using Apollo Reactive variables set to Apollo cache
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser @client
  }
`;

export const useGetCurrentUser = () => {
  const { data } = useQuery(GET_CURRENT_USER);
  let currentUser = null;
  const storedUsername = getItem('username');
  const storedUserUuid = getItem('userUuid');
  if (storedUsername) {
    currentUser = {
      username: storedUsername,
      uuid: storedUserUuid,
    };
  }
  return currentUser || data.currentUser;
};
