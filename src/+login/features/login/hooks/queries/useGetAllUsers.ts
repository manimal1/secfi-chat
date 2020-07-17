import { useQuery } from '@apollo/client';

import { GetAllUsersDocument, GetAllUsersQuery } from '@generated';

import { useGetApolloCallbacks } from 'hooks';

export function useGetAllUsers() {
  const { onCompleted, onError } = useGetApolloCallbacks({
    successMessage: 'Notifications are working!',
    errorMessage: 'Cannot fetch users',
  });
  return useQuery<GetAllUsersQuery>(GetAllUsersDocument, {
    onCompleted,
    onError,
  });
}
