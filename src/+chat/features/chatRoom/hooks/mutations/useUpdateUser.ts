import { useMutation, MutationHookOptions, MutationResult } from 'react-apollo';

import {
  UpdateUserDocument,
  UpdateUserMutationVariables,
  UpdateUserMutationResult,
} from '@generated';

import { useGetApolloCallbacks } from 'hooks';

export function useUpdateUser(): [
  (
    variables: UpdateUserMutationVariables,
    options?: MutationHookOptions
  ) => Promise<any>,
  MutationResult<UpdateUserMutationResult>
] {
  const { onError } = useGetApolloCallbacks({
    errorMessage: 'Error: cannot update User',
  });

  const [mutate, response] = useMutation<
    UpdateUserMutationResult,
    UpdateUserMutationVariables
  >(UpdateUserDocument, {
    ...onError,
  });

  return [
    (variables, options?) =>
      mutate({
        ...options,
        variables: {
          userUuid: variables.userUuid,
        },
      }),
    response,
  ];
}
