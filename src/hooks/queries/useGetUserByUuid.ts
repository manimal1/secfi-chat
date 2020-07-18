import { useQuery } from '@apollo/client';

import {
  GetUserByUuidDocument,
  GetUserByUuidQuery,
  GetUserByUuidQueryVariables,
} from '@generated';
import { useGetApolloCallbacks } from 'hooks';

export function useGetUserByUuid(variables: GetUserByUuidQueryVariables) {
  const { onError } = useGetApolloCallbacks({});
  return useQuery<GetUserByUuidQuery, GetUserByUuidQueryVariables>(
    GetUserByUuidDocument,
    {
      variables,
      onError,
    }
  );
}
