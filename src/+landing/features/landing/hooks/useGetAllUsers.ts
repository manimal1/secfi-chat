import { useQuery } from "react-apollo";

import { GetAllUsersDocument, GetAllUsersQuery } from "@generated/facadeClient";

import { useGetApolloCallbacks } from "hooks";

export function useGetAllUsers() {
  const { onError } = useGetApolloCallbacks({});
  return useQuery<GetAllUsersQuery>(GetAllUsersDocument, {
    onError,
  });
}
