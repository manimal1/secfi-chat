import { InMemoryCache, makeVar } from '@apollo/client';

export const currentUserVar = makeVar(null);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentUser: {
          read() {
            return currentUserVar();
          },
        },
      },
    },
  },
});
