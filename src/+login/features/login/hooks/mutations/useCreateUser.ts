import {
  useMutation,
  MutationHookOptions,
  MutationResult,
} from '@apollo/client';

import {
  CreateUserDocument,
  CreateUserMutationVariables,
  CreateUserMutationResult,
} from '@generated';

import { useGetApolloCallbacks } from 'hooks';

export function useCreateUser(): [
  (
    variables: CreateUserMutationVariables,
    options?: MutationHookOptions
  ) => Promise<any>,
  MutationResult<CreateUserMutationResult>
] {
  const callbacks = useGetApolloCallbacks({
    successMessage: 'User created',
    errorMessage: 'Error: cannot create User',
  });

  const [mutate, response] = useMutation<
    CreateUserMutationResult,
    CreateUserMutationVariables
  >(CreateUserDocument, {
    ...callbacks,
  });

  return [
    (variables, options?) =>
      mutate({
        ...options,
        variables: {
          username: variables.username,
        },
      }),
    response,
  ];
}
