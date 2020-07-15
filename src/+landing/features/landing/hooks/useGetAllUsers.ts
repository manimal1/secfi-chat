import { useQuery } from "react-apollo";

import { GetAllUsersDocument, GetAllUsersQuery } from "@generated";

import { useGetApolloCallbacks } from "hooks";

export function useGetAllUsers() {
  const { onError } = useGetApolloCallbacks({});
  return useQuery<GetAllUsersQuery>(GetAllUsersDocument, {
    onError,
  });
}
