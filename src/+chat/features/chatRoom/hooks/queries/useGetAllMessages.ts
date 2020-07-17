import { useQuery } from '@apollo/client';

import { GetAllMessagesDocument, GetAllMessagesQuery } from '@generated';

import { useGetApolloCallbacks } from 'hooks';

export function useGetAllMessages() {
  const { onError } = useGetApolloCallbacks({
    errorMessage: 'Cannot fetch messages',
  });
  return useQuery<GetAllMessagesQuery>(GetAllMessagesDocument, {
    onError,
  });
}
