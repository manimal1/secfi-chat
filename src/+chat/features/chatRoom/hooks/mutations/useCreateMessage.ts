import {
  useMutation,
  MutationHookOptions,
  MutationResult,
} from '@apollo/client';

import {
  CreateMessageDocument,
  CreateMessageMutationVariables,
  CreateMessageMutationResult,
} from '@generated';

import { useGetApolloCallbacks } from 'hooks';

export function useCreateMessage(): [
  (
    variables: CreateMessageMutationVariables,
    options?: MutationHookOptions
  ) => Promise<any>,
  MutationResult<CreateMessageMutationResult>
] {
  const callbacks = useGetApolloCallbacks({
    successMessage: 'Message created',
    errorMessage: 'Error: cannot create Message',
  });

  const [mutate, response] = useMutation<
    CreateMessageMutationResult,
    CreateMessageMutationVariables
  >(CreateMessageDocument, {
    ...callbacks,
  });

  return [
    (variables, options?) =>
      mutate({
        ...options,
        variables: {
          message: variables.message,
        },
      }),
    response,
  ];
}
